import fs from 'fs';
import path from 'path';
import type { NextApiRequest, NextApiResponse } from 'next';

type Post = {
  id: string;
  title: string;
  date: string;
  text: string;
};

const listOfPosts = () => {
  const postsDirectory = path.join(__dirname, '_posts');
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');

    const content = fs.readFileSync(
      path.join(postsDirectory, fileName),
      'utf8',
    );
    const lines = content.split('\n');
    const title = lines[2]
      .split(':')[1]
      .trim()
      .replace(/'/g, '')
      .toLocaleLowerCase();
    const [, ...date] = lines[3].split(':');
    const text = content.split('---')[2];

    return {
      id,
      title,
      date: date.join(':').replace(/'/g, '').trim(),
      text: text.replace(/\n/g, '').toLocaleLowerCase(),
    };
  });
};

const search = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(listOfPosts());
};

export default search;
