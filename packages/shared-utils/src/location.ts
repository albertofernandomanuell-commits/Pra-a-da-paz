export interface Coordinates {
  latitude: number;
  longitude: number;
}

export const calculateDistance = (
  from: Coordinates,
  to: Coordinates
): number => {
  const R = 6371; // Raio da Terra em km
  const dLat = toRad(to.latitude - from.latitude);
  const dLon = toRad(to.longitude - from.longitude);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(from.latitude)) *
      Math.cos(toRad(to.latitude)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

const toRad = (degrees: number): number => {
  return degrees * (Math.PI / 180);
};

export const estimateTravelTime = (
  distanceKm: number,
  speedKmh: number = 30
): number => {
  return Math.ceil((distanceKm / speedKmh) * 60);
};

export const getNearbyProfessionals = (
  professionals: any[],
  userLocation: Coordinates,
  radiusKm: number = 20
): any[] => {
  return professionals
    .map((prof) => ({
      ...prof,
      distance: calculateDistance(userLocation, {
        latitude: prof.latitude,
        longitude: prof.longitude,
      }),
      estimatedTime: estimateTravelTime(
        calculateDistance(userLocation, {
          latitude: prof.latitude,
          longitude: prof.longitude,
        })
      ),
    }))
    .filter((prof) => prof.distance <= radiusKm)
    .sort((a, b) => a.distance - b.distance);
};

export const getAngolaCities = (): string[] => {
  return [
    'Luanda',
    'Cabinda',
    'Zaire',
    'Uíge',
    'Bengo',
    'Kwanza Norte',
    'Kwanza Sul',
    'Malanje',
    'Lunda Norte',
    'Lunda Sul',
    'Moxico',
    'Huíla',
    'Namibe',
    'Benguela',
    'Cuanza Sul',
    'Cuanza Norte',
    'Cuando Cubango',
  ];
};

export const getLuandaNeighborhoods = (): string[] => {
  return [
    'Maianga',
    'Cazenga',
    'Sambizanga',
    'Kilamba',
    'Viana',
    'Zango',
    'Sequele',
    'Benfica',
    'Alvalade',
    'Parque 2000',
    'Alto do Samba',
    'Cacuaco',
    'Ramiros',
    'Rangel',
    'Ingombota',
  ];
};

export const getCountryCode = (city: string): string => {
  const countryMap: Record<string, string> = {
    luanda: 'AO',
    cabinda: 'AO',
    zaire: 'AO',
  };
  return countryMap[city.toLowerCase()] || 'AO';
};
