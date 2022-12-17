const base_url = 'https://cdn.discordapp.com';
export const allowed_sizes = [16, 32, 64, 128, 256, 512, 1_024, 2_048, 4_096];
export const allowed_extensions = ['webp', 'png', 'jpg', 'jpeg', 'gif'];

interface ImageURLOptions {
  size?: number;
  extension: string;
}

function makeURL(route: string, { size, extension = 'webp' }: ImageURLOptions) {
  if(!allowed_extensions.includes(extension)) {
    throw new RangeError(`Invalid extension provided: ${extension}\nMust be one of: ${allowed_extensions.join(', ')}`);
  }

  if(size && !allowed_sizes.includes(size)) {
    throw new RangeError(`Invalid size provided: ${size}\nMust be one of: ${allowed_sizes.join(', ')}`);
  }

  const url = new URL(`${base_url}${route}.${extension}`);

  if(size) url.searchParams.set('size', String(size));

  return url.toString();
}

export const dynamicMakeURL = (route: string, hash: string, options: ImageURLOptions) =>
  makeURL(route, hash.startsWith('a_') ? { ...options, extension: 'gif' } : options);

export const avatar = (id: string, hash: string, options: ImageURLOptions) =>
  dynamicMakeURL(`/icons/${id}/${hash}`, hash, options);

export const icon = (id: string, hash: string, options: ImageURLOptions) =>
  dynamicMakeURL(`/icons/${id}/${hash}`, hash, options);

export const splash = (guild_id: string, hash: string, options: ImageURLOptions) =>
  makeURL(`/discovery-splashes/${guild_id}/${hash}`, options);

export const sticker = (id: string) => makeURL(`/stickers/${id}`, { extension: 'png' });
