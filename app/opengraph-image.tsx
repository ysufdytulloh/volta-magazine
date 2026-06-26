import { ImageResponse } from "next/og";
import sharp from "sharp";
import fs from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/jpeg";

async function loadGoogleFont(font: string, weight: number, text: string) {
  const url = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(
    font
  )}:wght@${weight}&text=${encodeURIComponent(text)}`;
  const css = await (await fetch(url)).text();
  const match = css.match(
    /src: url\(([^)]+)\) format\('(opentype|truetype)'\)/
  );

  if (match) {
    const res = await fetch(match[1]);
    if (res.status === 200) return await res.arrayBuffer();
  }
  throw new Error(`Gagal memuat font: ${font}`);
}

export default async function OpengraphImage() {
  const text = "VOLTA Energi Masa Kini Perubahannya E-Magazine";

  const [imageData, playfairData, jakartaData] = await Promise.all([
    fs.readFile(path.join(process.cwd(), "public/covers/cover-bg.jpg")),
    loadGoogleFont("Playfair Display", 700, text),
    loadGoogleFont("Plus Jakarta Sans", 400, text)
  ]);
  const base64Image = `data:image/jpeg;base64,${imageData.toString("base64")}`;

  const imageResponse = new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "#231F1C"
        }}
      >
        <img
          src={base64Image}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(to bottom, rgba(35,31,28,0.5), rgba(35,31,28,0.95))"
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 60,
            left: 60,
            display: "flex",
            flexDirection: "column"
          }}
        >
          <div
            style={{
              fontSize: 28,
              color: "#FBEAEA",
              fontFamily: "Playfair Display",
              marginBottom: 8
            }}
          >
            Energi Masa Kini
          </div>
          <div
            style={{
              fontSize: 90,
              color: "#F7F3EC",
              fontFamily: "Playfair Display",
              fontWeight: 700,
              letterSpacing: -2
            }}
          >
            VOLTA
          </div>
          <div
            style={{
              fontSize: 24,
              color: "rgba(247,243,236,0.7)",
              fontFamily: "Plus Jakarta Sans",
              marginTop: 16
            }}
          >
            Energi &amp; Perubahannya — E-Magazine
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Playfair Display",
          data: playfairData,
          weight: 700,
          style: "normal"
        },
        {
          name: "Plus Jakarta Sans",
          data: jakartaData,
          weight: 400,
          style: "normal"
        }
      ]
    }
  );

  const pngBuffer = Buffer.from(await imageResponse.arrayBuffer());
  const jpegBuffer = await sharp(pngBuffer).jpeg({ quality: 80 }).toBuffer();

  return new Response(new Uint8Array(jpegBuffer), {
    headers: {
      "Content-Type": "image/jpeg",
      "Cache-Control": "public, immutable, no-transform, max-age=31536000"
    }
  });
}
