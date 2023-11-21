const toggleBtn = document.querySelector('.billing__btn')
const slider = document.querySelector('.pricing__slider')
const headline = document.querySelector('.pricing__headline')
const price = document.querySelector('.pricing__price')
const per = document.querySelector('.pricing__per')

const handleToggle = () => {
	toggleBtn.classList.toggle('active')

	if (toggleBtn.classList.contains('active')) {
		const discount = (parseInt(price.textContent.slice(1, -3)) * 3) / 4
		const newPrice = `$${discount}.00`

		price.textContent = newPrice
		per.textContent = '/ year'
	} else {
		const noDiscount = Math.round(parseInt(price.textContent.slice(1, -3)) * 1.33)
		const newPrice = `$${noDiscount}.00`

		price.textContent = newPrice
		per.textContent = '/ month'
	}
}

const changeNumbersOnSlide = num => {
	if (slider.value < 25) {
		headline.textContent = '10k pageviews'
		price.textContent = `$${8 * num}.00`
	} else if (slider.value >= 25 && slider.value < 50) {
		headline.textContent = '50k pageviews'
		price.textContent = `$${12 * num}.00`
	} else if (slider.value >= 50 && slider.value < 75) {
		headline.textContent = '100k pageviews'
		price.textContent = `$${16 * num}.00`
	} else if (slider.value >= 75 && slider.value < 100) {
		headline.textContent = '500k pageviews'
		price.textContent = `$${24 * num}.00`
	} else {
		headline.textContent = '1m pageviews'
		price.textContent = `$${36 * num}.00`
	}
}

const hangleSlider = () => {
	if (toggleBtn.classList.contains('active')) {
		changeNumbersOnSlide(3 / 4)
	} else {
		changeNumbersOnSlide(1)
	}
}

slider.style.background = `linear-gradient(to right, hsl(174, 77%, 80%) ${50}%, hsl(228, 60%, 95%) ${50}%)`

slider.addEventListener('input', () => {
	const tempSliderValue = slider.value

	const progress = (tempSliderValue / slider.max) * 100

	slider.style.background = `linear-gradient(to right, hsl(174, 77%, 80%) ${progress}%, hsl(228, 60%, 95%) ${progress}%)`
})
toggleBtn.addEventListener('click', handleToggle)
slider.addEventListener('mousemove', hangleSlider)
slider.addEventListener('touchmove', hangleSlider)
slider.addEventListener('touchend', hangleSlider)
