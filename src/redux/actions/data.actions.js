const NORMALIZE_DATA = 'NORMALIZE_DATA';

export const normalizedData = (entity) => ({
    type: `${entity} ${NORMALIZE_DATA}`,
    payload: {
      meta: { entity }
    }
});