import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';

export default async function Notes() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore);
  const { data: products } = await supabase.from("products").select();

  return <div className='text-white'>{JSON.stringify(products, null, 2)}</div>
}