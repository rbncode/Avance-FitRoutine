<script>
import { useRouter } from 'vue-router';

export default {
    data() {
        return {
            router: useRouter()
        };
    },
    methods: {
        goTo(ruta) {
            this.router.push(ruta);
        }
    }
}
</script>

