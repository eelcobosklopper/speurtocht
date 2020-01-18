import { navigate } from "gatsby"

const globalOptionList = [
  {
    name: "magic",
    url: "thuis/magic"
  },
  {
    name: "jolien",
    url: "witches/jolien",
  },
  {
    name: "britt",
    url: "witches/britt",
  },
  {
    name: "aniek",
    url: "witches/aniek",
  },
  {
    name: "claartje",
    url: "witches/claartje",
  },
  {
    name: "jessica",
    url: "witches/jessica",
  },
  {
    name: "eva",
    url: "witches/eva",
  },
  {
    name: "anja",
    url: "witches/anja",
  },
  {
    name: "roos",
    url: "witches/roos",
  },
  {
    name: "cauldron",
    url: null,
  },
  {
    name: "love",
    url: null,
  },
  {
    name: "tooth",
    url: null,
  },
  {
    name: "parceltongue",
    url: null,
  },
  {
    name: "bubble",
    url: null,
  },
  {
    name: "alohomora",
    url: "spells/alohomora",
  },
]

export function magic(inputValue, optionList = []) {
  let cleanInputValue = inputValue.replace(/\s+/g, "").toLowerCase()

  if (optionList.length) {
    const value = optionList.find(key => key.name === cleanInputValue)
    if (value) {
      navigate(value.url)
    } else {
      return false
    }
  } else {
    const value = globalOptionList.find(key => key.name === cleanInputValue)
    if (value) {
      navigate(value.url)
    } else {
      return false
    }
  }
}