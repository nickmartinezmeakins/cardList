import { CardList } from '../components/organisms/CardList';
import cardList from '../../src/app/api/data.json'
export default function Home() {
  return (
    <CardList data={cardList} />
  );
}
