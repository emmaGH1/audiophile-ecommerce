'use server'

import { createClient } from "@/utils/supabase/server"

import { cookies } from "next/headers";

export async function fetchData() {
    try {
        const cookieStore = cookies()
        const supabase = createClient(cookieStore);
        const { data: products } = await supabase.from("products").select()
        return products
    } catch (error: unknown) {
      console.error('Error fetching data:', error);
    }
  }