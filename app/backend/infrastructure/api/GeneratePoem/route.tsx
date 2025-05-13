import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    message: "晴れ空に　汗ばむ午後の　東京風",
  });
}