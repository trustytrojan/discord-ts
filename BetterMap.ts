export default class BetterMap<K, V> extends Map<K, V> {
  filter(predicate: (v: V, k: K) => boolean): BetterMap<K, V> {
    if(typeof predicate !== 'function')
      throw new TypeError(`${predicate} is not of type function`);
    const filtered = new BetterMap<K, V>();
    for(const [k,v] of this)
      if(predicate(v, k))
        filtered.set(k, v);
    return filtered;
  }

  find(predicate: (v: V, k: K) => boolean): V | undefined {
    for(const [k,v] of this)
      if(predicate(v, k))
        return v;
  }
}