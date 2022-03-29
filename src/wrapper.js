export default {
    props: {
        value: { require: false }
    },
    data () {
        return {
            mixval: this.value
        }
    },
    watch: {
        mixval (value) {
            this.$emit('input', value)
        },
        value (value) {
            this.mixval = value
        }
    }
}