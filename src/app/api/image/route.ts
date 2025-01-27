import { NextResponse } from "next/server";
import { cloudinary } from "@/libs/cloudinary";
import { supabase } from "@/libs/supabase-server";
import { Readable } from "stream";
import { BlockType } from "@/enums/block-type.enum";

export async function POST(request: Request) {
  const authHeader = request.headers.get("authorization");
  const accessToken = authHeader?.split(" ")[1];
  // console.log("request", request);
  // console.log("accessToken", accessToken);

  if (!accessToken) {
    return NextResponse.json({ error: "No access token" }, { status: 401 });
  }

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser(accessToken);
  // console.log("user", user);
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 401 });
  }

  if (!user) {
    return NextResponse.json({ error: "No user found" }, { status: 401 });
  }

  const formData = await request.formData();
  const file = formData.get("image") as File;
  const title = formData.get("title") as string;
  const url = formData.get("url") as string | null;
  const profile_id = Number(formData.get("profile_id"));
  //   console.log("profile_id", profile_id);
  console.log("formData", formData);

  if (!file) {
    return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
  }

  if (file.size > 5 * 1024 * 1024) {
    return NextResponse.json(
      { error: "File size limit exceeded" },
      { status: 400 }
    );
  }

  const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
  if (!allowedTypes.includes(file.type)) {
    return NextResponse.json({ error: "Invalid file type" }, { status: 400 });
  }

  try {
    const buffer = await file.arrayBuffer();
    const readableStream = Readable.from(Buffer.from(buffer));

    const result = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { folder: "in-my-link/block" },
        (error, result) => {
          if (error) return reject(error);
          // console.error("Error uploading to Cloudinary", error);
          resolve(result);
        }
      );
      readableStream.pipe(stream);
    });
    // console.log("result", result);
    // console.log("id", user.id);
    const { data: maxData, error: maxError } = await supabase
      .from("blocks")
      .select("*")
      .eq("profile_id", profile_id)
      .order("sequence", { ascending: false })
      .limit(1)
      .maybeSingle();

    if (maxError) throw maxError;

    const { error } = await supabase
      .from("blocks")
      .insert({
        img_url: (result as CloudiNaryUploadResponse).url,
        public_id: (result as CloudiNaryUploadResponse).public_id,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        type: BlockType.IMAGE,
        title: title,
        url: url,
        profile_id: profile_id,
        sequence: maxData?.sequence ? maxData.sequence + 1 : 1,
      })
      .eq("profile_id", profile_id);

    if (error) {
      console.error("Error saving image URL to Supabase:", error);
      throw new Error("Failed to save image URL to Supabase");
    }

    return NextResponse.json(
      { message: "Image uploaded successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  const authHeader = request.headers.get("authorization");
  const accessToken = authHeader?.split(" ")[1];

  if (!accessToken) {
    return NextResponse.json({ error: "No access token" }, { status: 401 });
  }

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser(accessToken);
  // console.log("user", user);
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 401 });
  }

  if (!user) {
    return NextResponse.json({ error: "No user found" }, { status: 401 });
  }

  const formData = await request.formData();
  const public_id = formData.get("public_id") as string;

  if (!public_id) {
    return NextResponse.json({ error: "No public id" }, { status: 400 });
  }

  try {
    await cloudinary.uploader.destroy(public_id);

    return NextResponse.json(
      { message: "Image uploaded successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
