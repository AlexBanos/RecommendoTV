import { ref, watch } from 'vue'

export function useDebounce(source, delay = 400) {
  const debounced = ref(source.value)

  let timeout

  watch(source, (value) => {
    clearTimeout(timeout)

    timeout = setTimeout(() => {
      debounced.value = value
    }, delay)
  })

  return debounced
}