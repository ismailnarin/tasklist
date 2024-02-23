
import { Store } from 'vuex'

// Vuex store'unuzdaki durum yapısına göre State arayüzünü tanımlayın
interface State {
  count: number;
}

// this.$store özelliğinin türünü belirtmek için ComponentCustomProperties arayüzünü genişletin
declare module '@vue/runtime-core' {
  // Vuex store'unuzdaki durum yapısına göre State arayüzünü belirtin
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
