import { NextResponse } from "next/server";
import test from "node:test";

export async function GET (request: any) {
    return NextResponse.json({data: test})
}