'use server'

import { createClient } from "@/utils/supabase/server"

import { cookies } from "next/headers";
const cookieStore = cookies()
const supabase = createClient(cookieStore);

export async function fetchProductsByCategory(category: string) {
      const { data, error } = await supabase
      .from("products")
      .select()
      .eq('category', category)

    if (error) {
      console.error('Error fetching data:', error);
      throw new Error('Failed to fetch ')
    }
    return data
}

export async function fetchProductById(slug: string) {
    const { data, error } = await supabase
      .from("products")
      .select()
      .eq('slug', slug)
    
    if (error) {
      console.error('Error fetching data:', error);
      throw new Error('Failed to fetch ')
    }
    return data
}

