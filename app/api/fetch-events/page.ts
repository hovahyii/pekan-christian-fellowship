import { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@supabase/supabase-js';

const url = process.env.SUPABASE_URL || '';
const key = process.env.SUPABASE_KEY || '';

// Initialize the Supabase client
const supabase = createClient(url, key);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // Fetch event data from the 'events' table
    const { data, error } = await supabase.from('events').select('*');

    if (error) {
      throw error;
    }

    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).json({ error: 'An error occurred while fetching events.' });
  }
};
