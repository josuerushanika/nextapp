import { NextResponse } from "next/server";
import test from "node:test";

export async function GET (request: any) {
    const {searchParams} = new URL(request.url)
    const searchText = searchParams.get('q')
    return NextResponse.json({data: searchText})
}