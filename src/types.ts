export interface ActivityItem {
  id: number;
  mode: string;
  level: number;
  groupSize: number;
  participants: number;
  coins: {
    gold: number;
    red: number;
  };
  earnings: number;
  image: string;
}
