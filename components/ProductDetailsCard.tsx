import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Product } from '../types/product';

export default function ProductDetailsCard({ product }: { product: Product }) {
  return (
    <ScrollView contentContainerStyle={styles.wrap}>
      <View style={styles.image} />
      <Text style={styles.manufacturer}>{product.manufacturer}</Text>
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.latin}>{product.latin_name}</Text>
      <Text style={styles.category}>{product.category}</Text>
      <Text style={styles.meta}>Форма: {product.form}</Text>
      <Text style={styles.meta}>Дозировка: {product.dosage}</Text>
      <Text style={styles.meta}>
        Рецепт: {product.prescription_required ? 'требуется' : 'не требуется'}
      </Text>
      <Text style={styles.stock}>В наличии: {product.stock} шт.</Text>
      <Text style={styles.substance}>
        Действующее вещество: {product.active_substance}
      </Text>
      <Text style={styles.desc}>{product.description}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrap: { padding: 20, paddingBottom: 40 },
  image: {
    width: '100%',
    height: 160,
    borderRadius: 16,
    backgroundColor: '#eef3fa',
    marginBottom: 16,
  },
  manufacturer: { fontSize: 12, color: '#888', textTransform: 'uppercase' },
  name: { fontSize: 22, fontWeight: '700', marginVertical: 6 },
  latin: { fontSize: 14, color: '#666', marginBottom: 8, fontStyle: 'italic' },
  category: { fontSize: 13, color: '#999', marginBottom: 12 },
  meta: { fontSize: 14, color: '#333', marginBottom: 4 },
  stock: { fontSize: 13, color: '#4caf50', marginVertical: 8 },
  substance: { fontSize: 14, color: '#333', marginBottom: 12 },
  desc: { fontSize: 15, lineHeight: 22, color: '#333' },
});