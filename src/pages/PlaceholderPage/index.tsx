import { BGScroll } from '@components';
import { Card } from 'react-native-paper';

function PlaceholderPage() {
  return (
    <BGScroll>
      <Card>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Title title="Card Title" subtitle="Card Subtitle" />
      </Card>
    </BGScroll>
  );
}

export default PlaceholderPage;
