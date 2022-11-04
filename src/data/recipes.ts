import {RecipeInterface} from "../dataModel";

export const recipesArray: RecipeInterface[] = [
    {
        title: 'Bgongbao styled chicken',
        totalDuration: {time: 30, measure: "minutes"},
        recipeParts: [
            {
                name: "marinade",
                steps: [{
                    stepAction: "mix",
                    stepDuration: {
                        time: 1,
                        measure: "minute"
                    },
                    products: [
                        {
                            name: "salt",
                            portion: [{
                                size: 'teaspoon', quantity: 0.5
                            }]
                        },
                        {
                            name: "light soy sauce",
                            portion: [{
                                size: 'tablespoon', quantity: 2
                            }]
                        },
                        {
                            name: "potato starch",
                            portion: [{
                                size: 'teaspoon', quantity: 2
                            }]
                        },
                        {
                            name: "Mirin",
                            portion: [{
                                size: 'tablespoon', quantity: 2
                            }]
                        },
                        {
                            name: "minced ginger",
                            portion: [{
                                size: 'tablespoon', quantity: 1
                            }]
                        },
                        {
                            name: "minced chilli",
                            portion: [{
                                size: 'teaspoon', quantity: 1
                            }]
                        }]
                }],
            },
            {
                name: "meat",
                steps: [
                    {
                        stepAction: "chop",
                        stepDuration: {
                            time: 5,
                            measure: "minute"
                        },
                        products: [{
                            name: "chicken breast",
                            portion: [{
                                size: 'gram', quantity: 400
                            }]
                        }]
                    },
                    {
                        stepAction: "mix",
                        stepDuration: {
                            time: 1,
                            measure: "minute"
                        },
                        products: [
                            {
                                name: "meat",
                                amount: "all"
                            },
                            {
                                name: "marinate",
                                amount: "all"
                            }]
                    }
                ]
            },
            {
                name: "prep",
                steps: [
                    {
                        stepAction: "chop",
                        stepDuration: {
                            time: 5,
                            measure: "minute"
                        },
                        products: [{
                            name: "cucumber",
                            amount: 2
                        },
                            {
                                name: "spring onion",
                                amount: 3
                            },
                            {
                                name: "garlic",
                                portion: [{
                                    size: "clove",
                                    quantity: 5,
                                }]
                            }]
                    }]
            },
            {
                name: "sauce",
                steps: [
                    {
                        stepAction: "mix",
                        stepDuration: {
                            time: 1,
                            measure: "minute"
                        },
                        products: [
                            {
                                name: " Chinkiang vinegar",
                                portion: [{
                                    size: 'tablespoon', quantity: 2
                                }]
                            },
                            {
                                name: "sugar",
                                portion: [{
                                    size: 'tablespoon', quantity: 1
                                }]
                            },
                            {
                                name: "Mirin",
                                portion: [{
                                    size: 'tablespoon', quantity: 2
                                }]
                            }]
                    }
                ]
            },
            {
                name: "stir-fry",
                steps: [
                    {
                        stepAction: "add",
                        stepDuration: {
                            time: 0.5,
                            measure: "minute"
                        },
                        products: [
                            {
                                name: "oil",
                                portion: [{
                                    size: 'tablespoon', quantity: 2
                                }]
                            }
                        ]
                    },
                    {
                        stepAction: "stir-fry",
                        stepDuration: {
                            time: 5,
                            measure: "minute"
                        },
                        products: [
                            {
                                name: "meat",
                                amount: "all"
                            }
                        ]
                    },
                    {
                        stepAction: "stir-fry",
                        stepDuration: {
                            time: 5,
                            measure: "minute"
                        },
                        products: [
                            {
                                name: "vegetables",
                                amount: "all"
                            }
                        ]
                    },
                    {
                        stepAction: "add",
                        stepDuration: {
                            time: 2,
                            measure: "minute"
                        },
                        products: [
                            {
                                name: "sauce",
                                amount: "all"
                            }
                        ]
                    }

                ]
            }
        ],
        rating: 5
    },
    {
        title: 'Agongbao styled chicken',
        totalDuration: {time: 30, measure: "minutes"},
        recipeParts: [
            {
                name: "marinade",
                steps: [{
                    stepAction: "mix",
                    stepDuration: {
                        time: 1,
                        measure: "minute"
                    },
                    products: [
                        {
                            name: "salt",
                            portion: [{
                                size: 'teaspoon', quantity: 0.5
                            }]
                        },
                        {
                            name: "light soy sauce",
                            portion: [{
                                size: 'tablespoon', quantity: 2
                            }]
                        },
                        {
                            name: "potato starch",
                            portion: [{
                                size: 'teaspoon', quantity: 2
                            }]
                        },
                        {
                            name: "Mirin",
                            portion: [{
                                size: 'tablespoon', quantity: 2
                            }]
                        },
                        {
                            name: "minced ginger",
                            portion: [{
                                size: 'tablespoon', quantity: 1
                            }]
                        },
                        {
                            name: "minced chilli",
                            portion: [{
                                size: 'teaspoon', quantity: 1
                            }]
                        }]
                }],
            },
            {
                name: "meat",
                steps: [
                    {
                        stepAction: "chop",
                        stepDuration: {
                            time: 5,
                            measure: "minute"
                        },
                        products: [{
                            name: "chicken breast",
                            portion: [{
                                size: 'gram', quantity: 400
                            }]
                        }]
                    },
                    {
                        stepAction: "mix",
                        stepDuration: {
                            time: 1,
                            measure: "minute"
                        },
                        products: [
                            {
                                name: "meat",
                                amount: "all"
                            },
                            {
                                name: "marinate",
                                amount: "all"
                            }]
                    }
                ]
            },
            {
                name: "prep",
                steps: [
                    {
                        stepAction: "chop",
                        stepDuration: {
                            time: 5,
                            measure: "minute"
                        },
                        products: [{
                            name: "cucumber",
                            amount: 2
                        },
                            {
                                name: "spring onion",
                                amount: 3
                            },
                            {
                                name: "garlic",
                                portion: [{
                                    size: "clove",
                                    quantity: 5,
                                }]
                            }]
                    }]
            },
            {
                name: "sauce",
                steps: [
                    {
                        stepAction: "mix",
                        stepDuration: {
                            time: 1,
                            measure: "minute"
                        },
                        products: [
                            {
                                name: " Chinkiang vinegar",
                                portion: [{
                                    size: 'tablespoon', quantity: 2
                                }]
                            },
                            {
                                name: "sugar",
                                portion: [{
                                    size: 'tablespoon', quantity: 1
                                }]
                            },
                            {
                                name: "Mirin",
                                portion: [{
                                    size: 'tablespoon', quantity: 2
                                }]
                            }]
                    }
                ]
            },
            {
                name: "stir-fry",
                steps: [
                    {
                        stepAction: "add",
                        stepDuration: {
                            time: 0.5,
                            measure: "minute"
                        },
                        products: [
                            {
                                name: "oil",
                                portion: [{
                                    size: 'tablespoon', quantity: 2
                                }]
                            }
                        ]
                    },
                    {
                        stepAction: "stir-fry",
                        stepDuration: {
                            time: 5,
                            measure: "minute"
                        },
                        products: [
                            {
                                name: "meat",
                                amount: "all"
                            }
                        ]
                    },
                    {
                        stepAction: "stir-fry",
                        stepDuration: {
                            time: 5,
                            measure: "minute"
                        },
                        products: [
                            {
                                name: "vegetables",
                                amount: "all"
                            }
                        ]
                    },
                    {
                        stepAction: "add",
                        stepDuration: {
                            time: 2,
                            measure: "minute"
                        },
                        products: [
                            {
                                name: "sauce",
                                amount: "all"
                            }
                        ]
                    }

                ]
            }
        ],
        rating: 3
    },
    {
        title: 'Cgongbao styled chicken',
        totalDuration: {time: 30, measure: "minutes"},
        recipeParts: [
            {
                name: "marinade",
                steps: [{
                    stepAction: "mix",
                    stepDuration: {
                        time: 1,
                        measure: "minute"
                    },
                    products: [
                        {
                            name: "salt",
                            portion: [{
                                size: 'teaspoon', quantity: 0.5
                            }]
                        },
                        {
                            name: "light soy sauce",
                            portion: [{
                                size: 'tablespoon', quantity: 2
                            }]
                        },
                        {
                            name: "potato starch",
                            portion: [{
                                size: 'teaspoon', quantity: 2
                            }]
                        },
                        {
                            name: "Mirin",
                            portion: [{
                                size: 'tablespoon', quantity: 2
                            }]
                        },
                        {
                            name: "minced ginger",
                            portion: [{
                                size: 'tablespoon', quantity: 1
                            }]
                        },
                        {
                            name: "minced chilli",
                            portion: [{
                                size: 'teaspoon', quantity: 1
                            }]
                        }]
                }],
            },
            {
                name: "meat",
                steps: [
                    {
                        stepAction: "chop",
                        stepDuration: {
                            time: 5,
                            measure: "minute"
                        },
                        products: [{
                            name: "chicken breast",
                            portion: [{
                                size: 'gram', quantity: 400
                            }]
                        }]
                    },
                    {
                        stepAction: "mix",
                        stepDuration: {
                            time: 1,
                            measure: "minute"
                        },
                        products: [
                            {
                                name: "meat",
                                amount: "all"
                            },
                            {
                                name: "marinate",
                                amount: "all"
                            }]
                    }
                ]
            },
            {
                name: "prep",
                steps: [
                    {
                        stepAction: "chop",
                        stepDuration: {
                            time: 5,
                            measure: "minute"
                        },
                        products: [{
                            name: "cucumber",
                            amount: 2
                        },
                            {
                                name: "spring onion",
                                amount: 3
                            },
                            {
                                name: "garlic",
                                portion: [{
                                    size: "clove",
                                    quantity: 5,
                                }]
                            }]
                    }]
            },
            {
                name: "sauce",
                steps: [
                    {
                        stepAction: "mix",
                        stepDuration: {
                            time: 1,
                            measure: "minute"
                        },
                        products: [
                            {
                                name: " Chinkiang vinegar",
                                portion: [{
                                    size: 'tablespoon', quantity: 2
                                }]
                            },
                            {
                                name: "sugar",
                                portion: [{
                                    size: 'tablespoon', quantity: 1
                                }]
                            },
                            {
                                name: "Mirin",
                                portion: [{
                                    size: 'tablespoon', quantity: 2
                                }]
                            }]
                    }
                ]
            },
            {
                name: "stir-fry",
                steps: [
                    {
                        stepAction: "add",
                        stepDuration: {
                            time: 0.5,
                            measure: "minute"
                        },
                        products: [
                            {
                                name: "oil",
                                portion: [{
                                    size: 'tablespoon', quantity: 2
                                }]
                            }
                        ]
                    },
                    {
                        stepAction: "stir-fry",
                        stepDuration: {
                            time: 5,
                            measure: "minute"
                        },
                        products: [
                            {
                                name: "meat",
                                amount: "all"
                            }
                        ]
                    },
                    {
                        stepAction: "stir-fry",
                        stepDuration: {
                            time: 5,
                            measure: "minute"
                        },
                        products: [
                            {
                                name: "vegetables",
                                amount: "all"
                            }
                        ]
                    },
                    {
                        stepAction: "add",
                        stepDuration: {
                            time: 2,
                            measure: "minute"
                        },
                        products: [
                            {
                                name: "sauce",
                                amount: "all"
                            }
                        ]
                    }

                ]
            }
        ],
        rating: 2.5
    },
    {
        title: 'Dgongbao styled chicken',
        totalDuration: {time: 30, measure: "minutes"},
        recipeParts: [
            {
                name: "marinade",
                steps: [{
                    stepAction: "mix",
                    stepDuration: {
                        time: 1,
                        measure: "minute"
                    },
                    products: [
                        {
                            name: "salt",
                            portion: [{
                                size: 'teaspoon', quantity: 0.5
                            }]
                        },
                        {
                            name: "light soy sauce",
                            portion: [{
                                size: 'tablespoon', quantity: 2
                            }]
                        },
                        {
                            name: "potato starch",
                            portion: [{
                                size: 'teaspoon', quantity: 2
                            }]
                        },
                        {
                            name: "Mirin",
                            portion: [{
                                size: 'tablespoon', quantity: 2
                            }]
                        },
                        {
                            name: "minced ginger",
                            portion: [{
                                size: 'tablespoon', quantity: 1
                            }]
                        },
                        {
                            name: "minced chilli",
                            portion: [{
                                size: 'teaspoon', quantity: 1
                            }]
                        }]
                }],
            },
            {
                name: "meat",
                steps: [
                    {
                        stepAction: "chop",
                        stepDuration: {
                            time: 5,
                            measure: "minute"
                        },
                        products: [{
                            name: "chicken breast",
                            portion: [{
                                size: 'gram', quantity: 400
                            }]
                        }]
                    },
                    {
                        stepAction: "mix",
                        stepDuration: {
                            time: 1,
                            measure: "minute"
                        },
                        products: [
                            {
                                name: "meat",
                                amount: "all"
                            },
                            {
                                name: "marinate",
                                amount: "all"
                            }]
                    }
                ]
            },
            {
                name: "prep",
                steps: [
                    {
                        stepAction: "chop",
                        stepDuration: {
                            time: 5,
                            measure: "minute"
                        },
                        products: [{
                            name: "cucumber",
                            amount: 2
                        },
                            {
                                name: "spring onion",
                                amount: 3
                            },
                            {
                                name: "garlic",
                                portion: [{
                                    size: "clove",
                                    quantity: 5,
                                }]
                            }]
                    }]
            },
            {
                name: "sauce",
                steps: [
                    {
                        stepAction: "mix",
                        stepDuration: {
                            time: 1,
                            measure: "minute"
                        },
                        products: [
                            {
                                name: " Chinkiang vinegar",
                                portion: [{
                                    size: 'tablespoon', quantity: 2
                                }]
                            },
                            {
                                name: "sugar",
                                portion: [{
                                    size: 'tablespoon', quantity: 1
                                }]
                            },
                            {
                                name: "Mirin",
                                portion: [{
                                    size: 'tablespoon', quantity: 2
                                }]
                            }]
                    }
                ]
            },
            {
                name: "stir-fry",
                steps: [
                    {
                        stepAction: "add",
                        stepDuration: {
                            time: 0.5,
                            measure: "minute"
                        },
                        products: [
                            {
                                name: "oil",
                                portion: [{
                                    size: 'tablespoon', quantity: 2
                                }]
                            }
                        ]
                    },
                    {
                        stepAction: "stir-fry",
                        stepDuration: {
                            time: 5,
                            measure: "minute"
                        },
                        products: [
                            {
                                name: "meat",
                                amount: "all"
                            }
                        ]
                    },
                    {
                        stepAction: "stir-fry",
                        stepDuration: {
                            time: 5,
                            measure: "minute"
                        },
                        products: [
                            {
                                name: "vegetables",
                                amount: "all"
                            }
                        ]
                    },
                    {
                        stepAction: "add",
                        stepDuration: {
                            time: 2,
                            measure: "minute"
                        },
                        products: [
                            {
                                name: "sauce",
                                amount: "all"
                            }
                        ]
                    }

                ]
            }
        ],
        rating: 3
    },
    {
        title: 'Ggongbao styled chicken',
        totalDuration: {time: 30, measure: "minutes"},
        recipeParts: [
            {
                name: "marinade",
                steps: [{
                    stepAction: "mix",
                    stepDuration: {
                        time: 1,
                        measure: "minute"
                    },
                    products: [
                        {
                            name: "salt",
                            portion: [{
                                size: 'teaspoon', quantity: 0.5
                            }]
                        },
                        {
                            name: "light soy sauce",
                            portion: [{
                                size: 'tablespoon', quantity: 2
                            }]
                        },
                        {
                            name: "potato starch",
                            portion: [{
                                size: 'teaspoon', quantity: 2
                            }]
                        },
                        {
                            name: "Mirin",
                            portion: [{
                                size: 'tablespoon', quantity: 2
                            }]
                        },
                        {
                            name: "minced ginger",
                            portion: [{
                                size: 'tablespoon', quantity: 1
                            }]
                        },
                        {
                            name: "minced chilli",
                            portion: [{
                                size: 'teaspoon', quantity: 1
                            }]
                        }]
                }],
            },
            {
                name: "meat",
                steps: [
                    {
                        stepAction: "chop",
                        stepDuration: {
                            time: 5,
                            measure: "minute"
                        },
                        products: [{
                            name: "chicken breast",
                            portion: [{
                                size: 'gram', quantity: 400
                            }]
                        }]
                    },
                    {
                        stepAction: "mix",
                        stepDuration: {
                            time: 1,
                            measure: "minute"
                        },
                        products: [
                            {
                                name: "meat",
                                amount: "all"
                            },
                            {
                                name: "marinate",
                                amount: "all"
                            }]
                    }
                ]
            },
            {
                name: "prep",
                steps: [
                    {
                        stepAction: "chop",
                        stepDuration: {
                            time: 5,
                            measure: "minute"
                        },
                        products: [{
                            name: "cucumber",
                            amount: 2
                        },
                            {
                                name: "spring onion",
                                amount: 3
                            },
                            {
                                name: "garlic",
                                portion: [{
                                    size: "clove",
                                    quantity: 5,
                                }]
                            }]
                    }]
            },
            {
                name: "sauce",
                steps: [
                    {
                        stepAction: "mix",
                        stepDuration: {
                            time: 1,
                            measure: "minute"
                        },
                        products: [
                            {
                                name: " Chinkiang vinegar",
                                portion: [{
                                    size: 'tablespoon', quantity: 2
                                }]
                            },
                            {
                                name: "sugar",
                                portion: [{
                                    size: 'tablespoon', quantity: 1
                                }]
                            },
                            {
                                name: "Mirin",
                                portion: [{
                                    size: 'tablespoon', quantity: 2
                                }]
                            }]
                    }
                ]
            },
            {
                name: "stir-fry",
                steps: [
                    {
                        stepAction: "add",
                        stepDuration: {
                            time: 0.5,
                            measure: "minute"
                        },
                        products: [
                            {
                                name: "oil",
                                portion: [{
                                    size: 'tablespoon', quantity: 2
                                }]
                            }
                        ]
                    },
                    {
                        stepAction: "stir-fry",
                        stepDuration: {
                            time: 5,
                            measure: "minute"
                        },
                        products: [
                            {
                                name: "meat",
                                amount: "all"
                            }
                        ]
                    },
                    {
                        stepAction: "stir-fry",
                        stepDuration: {
                            time: 5,
                            measure: "minute"
                        },
                        products: [
                            {
                                name: "vegetables",
                                amount: "all"
                            }
                        ]
                    },
                    {
                        stepAction: "add",
                        stepDuration: {
                            time: 2,
                            measure: "minute"
                        },
                        products: [
                            {
                                name: "sauce",
                                amount: "all"
                            }
                        ]
                    }

                ]
            }
        ],
        rating: 1
    },
    {
        title: 'Fgongbao styled chicken',
        totalDuration: {time: 30, measure: "minutes"},
        recipeParts: [
            {
                name: "marinade",
                steps: [{
                    stepAction: "mix",
                    stepDuration: {
                        time: 1,
                        measure: "minute"
                    },
                    products: [
                        {
                            name: "salt",
                            portion: [{
                                size: 'teaspoon', quantity: 0.5
                            }]
                        },
                        {
                            name: "light soy sauce",
                            portion: [{
                                size: 'tablespoon', quantity: 2
                            }]
                        },
                        {
                            name: "potato starch",
                            portion: [{
                                size: 'teaspoon', quantity: 2
                            }]
                        },
                        {
                            name: "Mirin",
                            portion: [{
                                size: 'tablespoon', quantity: 2
                            }]
                        },
                        {
                            name: "minced ginger",
                            portion: [{
                                size: 'tablespoon', quantity: 1
                            }]
                        },
                        {
                            name: "minced chilli",
                            portion: [{
                                size: 'teaspoon', quantity: 1
                            }]
                        }]
                }],
            },
            {
                name: "meat",
                steps: [
                    {
                        stepAction: "chop",
                        stepDuration: {
                            time: 5,
                            measure: "minute"
                        },
                        products: [{
                            name: "chicken breast",
                            portion: [{
                                size: 'gram', quantity: 400
                            }]
                        }]
                    },
                    {
                        stepAction: "mix",
                        stepDuration: {
                            time: 1,
                            measure: "minute"
                        },
                        products: [
                            {
                                name: "meat",
                                amount: "all"
                            },
                            {
                                name: "marinate",
                                amount: "all"
                            }]
                    }
                ]
            },
            {
                name: "prep",
                steps: [
                    {
                        stepAction: "chop",
                        stepDuration: {
                            time: 5,
                            measure: "minute"
                        },
                        products: [{
                            name: "cucumber",
                            amount: 2
                        },
                            {
                                name: "spring onion",
                                amount: 3
                            },
                            {
                                name: "garlic",
                                portion: [{
                                    size: "clove",
                                    quantity: 5,
                                }]
                            }]
                    }]
            },
            {
                name: "sauce",
                steps: [
                    {
                        stepAction: "mix",
                        stepDuration: {
                            time: 1,
                            measure: "minute"
                        },
                        products: [
                            {
                                name: " Chinkiang vinegar",
                                portion: [{
                                    size: 'tablespoon', quantity: 2
                                }]
                            },
                            {
                                name: "sugar",
                                portion: [{
                                    size: 'tablespoon', quantity: 1
                                }]
                            },
                            {
                                name: "Mirin",
                                portion: [{
                                    size: 'tablespoon', quantity: 2
                                }]
                            }]
                    }
                ]
            },
            {
                name: "stir-fry",
                steps: [
                    {
                        stepAction: "add",
                        stepDuration: {
                            time: 0.5,
                            measure: "minute"
                        },
                        products: [
                            {
                                name: "oil",
                                portion: [{
                                    size: 'tablespoon', quantity: 2
                                }]
                            }
                        ]
                    },
                    {
                        stepAction: "stir-fry",
                        stepDuration: {
                            time: 5,
                            measure: "minute"
                        },
                        products: [
                            {
                                name: "meat",
                                amount: "all"
                            }
                        ]
                    },
                    {
                        stepAction: "stir-fry",
                        stepDuration: {
                            time: 5,
                            measure: "minute"
                        },
                        products: [
                            {
                                name: "vegetables",
                                amount: "all"
                            }
                        ]
                    },
                    {
                        stepAction: "add",
                        stepDuration: {
                            time: 2,
                            measure: "minute"
                        },
                        products: [
                            {
                                name: "sauce",
                                amount: "all"
                            }
                        ]
                    }

                ]
            }
        ],
        rating: 2.5
    },

]
