const module = {
  name: 'module2'
}

export function load() {
  console.log(`load ${module.name}`)
}

export default module
