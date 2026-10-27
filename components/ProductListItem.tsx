import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Product } from '../types/product';
import { useCartStore } from '../stores/cartStore';

interface Props {
  product: Product;
  onPress: () => void;
}

export default function ProductListItem({ product, onPress }: Props) {
  const add = useCartStore((s) => s.add);

  return (
    <Pressable style={styles.card} onPress={onPress}>
      <View style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.brand}>{product.manufacturer}</Text>
        <Text style={styles.name} numberOfLines={2}>
          {product.name}
        </Text>
        <Text style={styles.meta}>
          {product.form} · {product.dosage}
        </Text>
        <Text style={styles.stock}>В наличии: {product.stock}</Text>
      </View>

      <Pressable
        style={styles.addBtn}
        onPress={(e) => {
          e.stopPropagation();
          add(product);
        }}
      >
        <Text style={styles.addBtnText}>+</Text>
      </Pressable>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 12,
    marginHorizontal: 12,
    marginVertical: 6,
    backgroundColor: '#fff',
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  image: { width: 64, height: 64, borderRadius: 8, backgroundColor: '#eef3fa' },
  info: { flex: 1, marginLeft: 12 },
  brand: { fontSize: 11, color: '#888', textTransform: 'uppercase' },
  name: { fontSize: 14, fontWeight: '600', marginVertical: 2 },
  meta: { fontSize: 13, color: '#1e88e5', fontWeight: '600' },
  stock: { fontSize: 12, color: '#4caf50', marginTop: 2 },
  addBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#43a047',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addBtnText: { color: '#fff', fontSize: 22, lineHeight: 24, fontWeight: '700' },
});