const module = {
  name: 'module1'
}

export function load() {
  console.log(`load ${module.name}`)
}

export default module
