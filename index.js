const zapatillas = [
  {
    id: 1,
    modelo: 'Air Max 1',
    marca: 'Nike Original',
    precio: 120,
    img: 'https://res.cloudinary.com/dscgktluo/image/upload/v1738841808/Proyecto%202/1_tkpmtk.png',
    estrellas: 4.5
  },
  {
    id: 2,
    modelo: 'NB 9060',
    marca: 'New Balance',
    precio: 80,
    img: 'https://res.cloudinary.com/dscgktluo/image/upload/v1738841809/Proyecto%202/2_xsiuuy.png',
    estrellas: 4.0
  },
  {
    id: 3,
    modelo: 'Nike Revolution',
    marca: 'Nike Original',
    precio: 90,
    img: 'https://res.cloudinary.com/dscgktluo/image/upload/v1738841809/Proyecto%202/3_xwoac9.png',
    estrellas: 4.2
  },
  {
    id: 4,
    modelo: 'Forum Buckle',
    marca: 'Adidas Original',
    precio: 100,
    img: 'https://res.cloudinary.com/dscgktluo/image/upload/v1738841810/Proyecto%202/4_gj9t7m.png',
    estrellas: 4.7
  },
  {
    id: 5,
    modelo: 'Campus',
    marca: 'Adidas Original',
    precio: 120,
    img: 'https://res.cloudinary.com/dscgktluo/image/upload/v1738841811/Proyecto%202/5_x5ydfe.png',
    estrellas: 5.0
  },
  {
    id: 6,
    modelo: 'NB 327',
    marca: 'New Balance',
    precio: 120,
    img: 'https://res.cloudinary.com/dscgktluo/image/upload/v1738841811/Proyecto%202/6_it0qjn.png',
    estrellas: 3.8
  },
  {
    id: 7,
    modelo: 'Dunk Low',
    marca: 'Nike Original',
    precio: 100,
    img: 'https://res.cloudinary.com/dscgktluo/image/upload/v1738841812/Proyecto%202/7_pubob2.png',
    estrellas: 4.6
  },
  {
    id: 8,
    modelo: 'Gazelle',
    marca: 'Adidas Original',
    precio: 90,
    img: 'https://res.cloudinary.com/dscgktluo/image/upload/v1738841813/Proyecto%202/8_pltkud.png',
    estrellas: 4.3
  },
  {
    id: 9,
    modelo: 'Air Max SC',
    marca: 'Nike Original',
    precio: 150,
    img: 'https://res.cloudinary.com/dscgktluo/image/upload/v1738841814/Proyecto%202/9_munvhx.png',
    estrellas: 4.1
  },
  {
    id: 10,
    modelo: 'Handball Spezial',
    marca: 'Adidas Original',
    precio: 120,
    img: 'https://res.cloudinary.com/dscgktluo/image/upload/v1738841814/Proyecto%202/10_jliye4.png',
    estrellas: 4.8
  },
  {
    id: 11,
    modelo: 'Air Force',
    marca: 'Nike Original',
    precio: 130,
    img: 'https://res.cloudinary.com/dscgktluo/image/upload/v1738841815/Proyecto%202/11_wvf8qx.png',
    estrellas: 4.4
  },
  {
    id: 12,
    modelo: 'NB 9060',
    marca: 'New Balance',
    precio: 100,
    img: 'https://res.cloudinary.com/dscgktluo/image/upload/v1738841816/Proyecto%202/12_ts8iob.png',
    estrellas: 4.0
  },
  {
    id: 13,
    modelo: 'NB 480',
    marca: 'New Balance',
    precio: 150,
    img: 'https://res.cloudinary.com/dscgktluo/image/upload/v1738841817/Proyecto%202/13_jai4z0.png',
    estrellas: 4.2
  },
  {
    id: 14,
    modelo: 'Full Force Low',
    marca: 'Nike Original',
    precio: 70,
    img: 'https://res.cloudinary.com/dscgktluo/image/upload/v1738841818/Proyecto%202/14_aqen8g.png',
    estrellas: 4.1
  },
  {
    id: 15,
    modelo: 'Air Max SC',
    marca: 'Nike Original',
    precio: 160,
    img: 'https://res.cloudinary.com/dscgktluo/image/upload/v1738841819/Proyecto%202/15_qxncer.png',
    estrellas: 3.9
  },
  {
    id: 16,
    modelo: 'Handball Spezial',
    marca: 'Adidas Original',
    precio: 140,
    img: 'https://res.cloudinary.com/dscgktluo/image/upload/v1738841820/Proyecto%202/16_eh0j0r.png',
    estrellas: 4.5
  }
]

const printZapas = (zapas) => {
  const divZapas = document.querySelector('#zapatillas')
  divZapas.innerHTML = ''

  for (const zapa of zapas) {
    const divZapa = document.createElement('div')
    const divImg = document.createElement('div')
    const img = document.createElement('img')
    const modelo = document.createElement('h3')
    const precio = document.createElement('p')
    const marca = document.createElement('h2')
    const button = document.createElement('button')
    const divDetalles = document.createElement('div')

    divZapa.className = 'flex-container'
    divImg.classList.add('imgContainer')
    divDetalles.classList.add('detalles')
    button.classList.add('zapa-button')
    marca.textContent = zapa.marca
    img.src = zapa.img
    modelo.textContent = zapa.modelo
    precio.textContent = zapa.precio.toFixed(2) + ' €'
    button.textContent = 'Comprar'

    divZapa.appendChild(divImg)
    divImg.appendChild(img)
    divZapa.appendChild(marca)
    divZapa.appendChild(divDetalles)
    divDetalles.appendChild(modelo)
    divDetalles.appendChild(precio)
    divZapa.appendChild(button)
    divZapas.appendChild(divZapa)
  }
}

printZapas(zapatillas)

// GENERAR SELECT DE MARCAS PARA FILTRAR
const generateBrandOptions = () => {
  const brands = [...new Set(zapatillas.map((zapa) => zapa.marca))] //
  const brandSelect = document.getElementById('brand-select')

  brandSelect.innerHTML = '<option value="">Todas las marcas</option>'

  brands.forEach((brand) => {
    const option = document.createElement('option')
    option.value = brand
    option.textContent = brand
    brandSelect.appendChild(option)
  })
}
generateBrandOptions()

// TOGGLE FILTROS
document.getElementById('filter-toggle').addEventListener('click', () => {
  const filterOptions = document.getElementById('filter-options')
  const filterToggleIcon = document
    .getElementById('filter-toggle')
    .querySelector('img')

  filterOptions.style.display =
    filterOptions.style.display === 'none' ? 'flex' : 'none'

  filterToggleIcon.style.transform =
    filterToggleIcon.style.transform === 'rotate(180deg)'
      ? 'rotate(0deg)'
      : 'rotate(180deg)'
})

// BOTÓN FILTRAR
document.getElementById('apply-filter').addEventListener('click', () => {
  const marca = document.getElementById('brand-select').value
  const precio = document.getElementById('price-input').value

  const filteredZapatillas = zapatillas.filter((zapa) => {
    let isBrandMatch = true
    let isPriceMatch = true

    if (marca) {
      isBrandMatch = zapa.marca === marca
    }
    if (precio) {
      isPriceMatch = zapa.precio <= precio
    }

    return isBrandMatch && isPriceMatch
  })

  printZapas(filteredZapatillas)
})

// BOTÓN LIMPIAR FILTROS
document.getElementById('reset-filter').addEventListener('click', () => {
  document.getElementById('brand-select').value = ''
  document.getElementById('price-input').value = ''

  printZapas(zapatillas)
})
