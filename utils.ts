const discord_epoch = 1420070400000n;

export const timestampFromId = (id: string) => Number((BigInt(id) >> 22n) + discord_epoch);