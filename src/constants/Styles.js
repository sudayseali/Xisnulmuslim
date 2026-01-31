import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from './Colors';

export const SCREEN_WIDTH = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  contentContainer: { flex: 1 },
  
  // Header
  headerContainer: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 24,
    paddingBottom: 24,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    zIndex: 10,
    elevation: 8,
  },
  headerCircle: {
    position: 'absolute', top: -50, right: -50, width: 200, height: 200, borderRadius: 100, backgroundColor: 'rgba(255,255,255,0.05)'
  },
  headerTopRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 },
  headerGreeting: { color: COLORS.accent, fontSize: 13, fontWeight: '600', textTransform: 'uppercase', letterSpacing: 1 },
  headerTitle: { color: COLORS.surface, fontSize: 28, fontWeight: '800' },
  logoContainer: { width: 40, height: 40, borderRadius: 20, backgroundColor: 'rgba(255,255,255,0.15)', alignItems: 'center', justifyContent: 'center' },
  searchContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: COLORS.surface, borderRadius: 14, paddingHorizontal: 15, height: 50 },
  searchInput: { flex: 1, marginLeft: 10, fontSize: 16, color: COLORS.textPrimary },

  // List Card
  card: { backgroundColor: COLORS.surface, borderRadius: 20, padding: 18, marginBottom: 12, elevation: 2, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 8, shadowOffset: {height: 4, width: 0} },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
  categoryText: { color: COLORS.primary, fontSize: 12, fontWeight: '700', backgroundColor: '#ECFDF5', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 6 },
  duaTitle: { fontSize: 17, fontWeight: '700', color: COLORS.textPrimary, marginBottom: 6 },
  duaPreview: { fontSize: 14, color: COLORS.textSecondary },

  // Names of Allah Grid
  namesGrid: { padding: 15, paddingBottom: 120 },
  nameCard: { flex: 1, margin: 6, backgroundColor: COLORS.surface, borderRadius: 16, padding: 16, alignItems: 'center', elevation: 2, borderWidth: 1, borderColor: '#F1F5F9' },
  nameNumber: { width: 24, height: 24, borderRadius: 12, backgroundColor: COLORS.goldLight, alignItems: 'center', justifyContent: 'center', marginBottom: 8 },
  nameNumberText: { fontSize: 10, fontWeight: 'bold', color: '#B45309' },
  nameArabic: { fontSize: 22, fontWeight: 'bold', color: COLORS.primary, marginBottom: 4 },
  nameTransliteration: { fontSize: 12, fontWeight: '600', color: COLORS.textPrimary },
  nameMeaning: { fontSize: 10, color: COLORS.textSecondary, textAlign: 'center', marginTop: 2 },

  // Tasbih
  tasbihContainer: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingBottom: 100 },
  tasbihDisplay: { alignItems: 'center', marginBottom: 40 },
  tasbihLabel: { fontSize: 14, color: COLORS.textSecondary, textTransform: 'uppercase', letterSpacing: 2 },
  tasbihCount: { fontSize: 80, fontWeight: '800', color: COLORS.primary, fontVariant: ['tabular-nums'] },
  tasbihTarget: { fontSize: 14, color: COLORS.accent, fontWeight: '600', marginTop: -5 },
  tasbihButton: { width: 220, height: 220, borderRadius: 110, backgroundColor: COLORS.primary, alignItems: 'center', justifyContent: 'center', elevation: 10, shadowColor: COLORS.primary, shadowOpacity: 0.4, shadowRadius: 20, shadowOffset: {height: 10} },
  tasbihInnerCircle: { width: 200, height: 200, borderRadius: 100, borderWidth: 4, borderColor: 'rgba(255,255,255,0.2)', alignItems: 'center', justifyContent: 'center' },
  resetButton: { flexDirection: 'row', alignItems: 'center', marginTop: 40, padding: 10 },
  resetText: { marginLeft: 8, color: COLORS.textSecondary, fontWeight: '600' },

  // Detail View
  detailContainer: { flex: 1, backgroundColor: COLORS.background },
  detailHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 15 },
  backButton: { width: 40, height: 40, borderRadius: 12, backgroundColor: '#E2E8F0', alignItems: 'center', justifyContent: 'center' },
  detailTitle: { fontSize: 18, fontWeight: '700', color: COLORS.textPrimary },
  arabicBox: { backgroundColor: COLORS.surface, padding: 24, borderRadius: 20, marginVertical: 10, elevation: 2 },
  arabicText: { textAlign: 'center', color: COLORS.arabic, lineHeight: 45 },
  controlsRow: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginVertical: 15, gap: 15 },
  sizeBtn: { backgroundColor: COLORS.surface, padding: 10, borderRadius: 8, borderWidth: 1, borderColor: '#E2E8F0' },
  transBox: { backgroundColor: COLORS.surface, padding: 20, borderRadius: 20 },
  transTitle: { color: COLORS.accent, fontWeight: '700', fontSize: 12, marginBottom: 10 },
  transText: { fontSize: 16, color: COLORS.textPrimary, lineHeight: 26 },

  // Tab Bar
  tabBar: { position: 'absolute', left: 20, right: 20, backgroundColor: COLORS.primaryDark, flexDirection: 'row', justifyContent: 'space-between', padding: 6, borderRadius: 24, elevation: 10, shadowColor: '#000', shadowOpacity: 0.3, shadowRadius: 10, shadowOffset: {height: 5} },
  tabItem: { flexDirection: 'row', alignItems: 'center', paddingVertical: 10, paddingHorizontal: 16, borderRadius: 18 },
  tabItemActive: { backgroundColor: COLORS.primary },
  tabText: { color: COLORS.surface, marginLeft: 8, fontWeight: '600', fontSize: 12 },
});