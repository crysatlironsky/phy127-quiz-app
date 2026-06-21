const QUESTIONS = [
  {
    "id": 1,
    "quiz": "PHY127",
    "title": "Forces I",
    "type": "multiple",
    "question": "True or false?",
    "options": [
      {
        "text": "An object is moving at constant velocity therefore the forces must not be balanced.",
        "correct": false
      },
      {
        "text": "If an object is falling in the positive direction through air, its drag force is in the negative direction.",
        "correct": true
      }
    ]
  },
  {
    "id": 2,
    "quiz": "PHY127",
    "title": "Forces II",
    "type": "multiple",
    "question": "An object is floating at the top of a glass of liquid. Some of it is sticking up out of the water. Which is true ?",
    "options": [
      {
        "text": "There is no buoyant force because the object is not moving.",
        "correct": false
      },
      {
        "text": "The drag force equals the buoyant force.",
        "correct": false
      },
      {
        "text": "There is no net force on the object.",
        "correct": true
      },
      {
        "text": "Since the object is at rest, the density of the object must be the same as that of the water.",
        "correct": false
      }
    ]
  },
  {
    "id": 3,
    "quiz": "PHY127",
    "title": "Accelerated charge",
    "type": "multiple",
    "question": "A negatively charged object is accelerating with only an electric force. Which of the following are true ?",
    "options": [
      {
        "text": "The object is moving in the same direction as the electric field.",
        "correct": false
      },
      {
        "text": "The acceleration depends on the mass of the object.",
        "correct": true
      },
      {
        "text": "The acceleration is independent of the object's electric charge.",
        "correct": false
      }
    ]
  },
  {
    "id": 4,
    "quiz": "PHY127",
    "title": "Ball",
    "type": "multiple",
    "question": "True or false?",
    "options": [
      {
        "text": "A glass ball can have any value of electric charge.",
        "correct": false
      },
      {
        "text": "If a ball is moving with a fixed velocity, v, the forces on the ball must be balanced.",
        "correct": true
      },
      {
        "text": "A buoyant force only happens when the ball is moving opposite to gravity.",
        "correct": false
      },
      {
        "text": "A drag force on a ball always points opposite to its velocity.",
        "correct": true
      }
    ]
  },
  {
    "id": 5,
    "quiz": "PHY127",
    "title": "Mother-Daughter race",
    "type": "multiple",
    "question": "A mother and her smaller daughter are skiing. They have the same body composition (body fat, muscle, bone density, etc.) They tuck down the hill to race each other, and have identical body positioning. Which is true ?",
    "options": [
      {
        "text": "The daughter will win because she is younger.",
        "correct": false
      },
      {
        "text": "The daughter will win because she is smaller.",
        "correct": false
      },
      {
        "text": "The mother will win because she is bigger.",
        "correct": true
      },
      {
        "text": "They will tie because they have the same density.",
        "correct": false
      }
    ]
  },
  {
    "id": 6,
    "quiz": "PHY127",
    "title": "Measurement",
    "type": "multiple",
    "question": "We want to precisely measure the radius of a very tiny ball of steel, but we don't have a ruler. We know the ball's density, but we can't measure its mass. We do have the internet and we have a swimming pool. How can we measure the radius ? (which are true?)",
    "options": [
      {
        "text": "We can measure how fast it falls in a swimming pool and use this to calculate the ball's size.",
        "correct": true
      },
      {
        "text": "We can measure how much higher the water is in the swimming pool with and without the ball and then determine the radius of the ball.",
        "correct": true
      },
      {
        "text": "We can put a specific amount of electric charge on the ball, then put two charged metal plates on the top and bottom of the swimming pool, and then change the voltage on the plates until the ball is suspended.",
        "correct": true
      }
    ]
  },
  {
    "id": 7,
    "quiz": "PHY127",
    "title": "Precision",
    "type": "single",
    "question": "Practically speaking, which of the above options would yield the most precise value of the radius ?",
    "options": [
      {
        "text": "We measure how fast it falls in a swimming pool and use this to calculate the ball's size.",
        "correct": true
      },
      {
        "text": "We measure how much higher the water is in the swimming pool with and without the ball and then determine the radius of the ball.",
        "correct": false
      },
      {
        "text": "We put a specific amount of electric charge on the ball, then put two charged metal plates on the top and bottom of the swimming pool, and then change the voltage on the plates until the ball is suspended.",
        "correct": false
      }
    ]
  },
  {
    "id": 8,
    "quiz": "PHY127",
    "title": "Wave propagation",
    "type": "single",
    "question": "An electromagnetic wave is propagating in the z direction. We measure its electric field in the +x direction. At this moment, what is the direction of the magnetic field ?",
    "options": [
      {
        "text": "-x direction",
        "correct": false
      },
      {
        "text": "-y direction",
        "correct": false
      },
      {
        "text": "+x direction",
        "correct": false
      },
      {
        "text": "+y direction",
        "correct": true
      }
    ]
  },
  {
    "id": 9,
    "quiz": "PHY127",
    "title": "2 mm wave",
    "type": "multiple",
    "question": "What is true about an electromagnetic wave with a wavelength of 2 mm.",
    "options": [
      {
        "text": "The amplitude of its Electric field reaches a maximum value every 3 seconds The amplitude of its Electric field reaches a maximum value every 3 seconds",
        "correct": false
      },
      {
        "text": "The amplitude of its Electric field reaches a maximum positive value every 2 mm that it travels",
        "correct": true
      },
      {
        "text": "This wavelength is visible to humans.",
        "correct": false
      },
      {
        "text": "This wavelength is useful for imaging the temperatures of outer space",
        "correct": true
      }
    ]
  },
  {
    "id": 10,
    "quiz": "PHY127",
    "title": "Sun light",
    "type": "multiple",
    "question": "Light from the sun is passed through a prism. Which is true ?",
    "options": [
      {
        "text": "High-frequency light is refracted more by the prism.",
        "correct": true
      },
      {
        "text": "The color of the light with maximum intensity is infrared.",
        "correct": false
      },
      {
        "text": "The color of the light with maximum intensity is green-ish.",
        "correct": true
      },
      {
        "text": "If we were instead in space, the color of light with maximum intensity would be more red.",
        "correct": false
      },
      {
        "text": "If we were instead under water, the color of light with maximum intensity would be more blue.",
        "correct": true
      }
    ]
  },
  {
    "id": 11,
    "quiz": "PHY127",
    "title": "Ultraviolet catastrophe",
    "type": "single",
    "question": "The classical description of blackbody radiation suffers from what is called the \"ultraviolet catastrophe\". Why does it have this name ?",
    "options": [
      {
        "text": "According to the theory, ultraviolet light has a wavelength that is so large that it is infinite.",
        "correct": false
      },
      {
        "text": "Objects with temperatures below 3000 K emit mainly ultraviolet light, but this is invisible to the human eye, so classical physicists didn't know about it.",
        "correct": false
      },
      {
        "text": "Ultraviolet light, which has a small wavelength compared to red light, is predicted to be radiated with infinite intensity, which is obviously not correct, and therefore a catastrophic mistake.",
        "correct": true
      }
    ]
  },
  {
    "id": 12,
    "quiz": "PHY127",
    "title": "Harmonic oscillator",
    "type": "multiple",
    "question": "What is true about a harmonic oscillator ?",
    "options": [
      {
        "text": "It moves such that its amplitude repeats periodically.",
        "correct": true
      },
      {
        "text": "Examples of a harmonic oscillator are a spring and a pendulum.",
        "correct": true
      },
      {
        "text": "A very hot object has faster oscillators than a cold object.",
        "correct": true
      }
    ]
  },
  {
    "id": 13,
    "quiz": "PHY127",
    "title": "Black body",
    "type": "single",
    "question": "What is FALSE about a heated blackbody ?",
    "options": [
      {
        "text": "It can be thought of as a large number of harmonic oscillators emitting light of different wavelengths",
        "correct": false
      },
      {
        "text": "Blackbodies are black so they are required to emit no light.",
        "correct": true
      },
      {
        "text": "The radiation is in the form of particles, each with a specific energy",
        "correct": false
      },
      {
        "text": "The radiation is in the form of particles that are waves, each with a specific wavelength",
        "correct": false
      }
    ]
  },
  {
    "id": 14,
    "quiz": "PHY127",
    "title": "Particle",
    "type": "multiple",
    "question": "TRUE or FALSE about the formula for energy of a particle ?",
    "options": [
      {
        "text": "A particle with no mass has an energy proportional to its wavelength. A particle with no mass has an energy proportional to its wavelength.",
        "correct": false
      },
      {
        "text": "A particle with no momentum has an energy proportional to its mass.",
        "correct": true
      },
      {
        "text": "Because p = mv, and photons move at the speed of light, all photons have the same momentum.",
        "correct": false
      },
      {
        "text": "Visible light can be produced with the voltage of a few double A batteries.",
        "correct": true
      }
    ]
  },
  {
    "id": 15,
    "quiz": "PHY127",
    "title": "Electron emission",
    "type": "single",
    "question": "Which ONE is FALSE about experiments to eject electrons from a material with light ?",
    "options": [
      {
        "text": "The light must be above a certain frequency, otherwise no electrons will be emitted.",
        "correct": false
      },
      {
        "text": "The higher the frequency of light, the more energy the electrons absorb.",
        "correct": false
      },
      {
        "text": "If the material is positively charged, electrons will be ejected by a lamp.",
        "correct": true
      },
      {
        "text": "For such an electron to reach a negatively charged plate, it must be hit by a photon with a high enough energy to overcome both the electric potential as well as the binding energy of the material.",
        "correct": false
      },
      {
        "text": "The more intense the light, the higher the number of electrons being emitted.",
        "correct": false
      }
    ]
  },
  {
    "id": 16,
    "quiz": "PHY127",
    "title": "Two slits",
    "type": "single",
    "question": "Suppose we have an experiment where objects pass through two slits and are measured on a screen on the other side. Which one is FALSE ?",
    "options": [
      {
        "text": "When we measure a photon, it is no longer a wave, and must be in one place.",
        "correct": false
      },
      {
        "text": "Before we measure a photon, it acts like a wave in which part of the wave travels through both slits.",
        "correct": false
      },
      {
        "text": "If the objects behave as waves, then they will be visibly grouped into more than two regions on the screen if the sizes of the experiment are chosen correctly.",
        "correct": false
      },
      {
        "text": "Individual photons go through both slits because they are waves.",
        "correct": false
      },
      {
        "text": "Individual photons travel through only one slit because they are particles.",
        "correct": true
      },
      {
        "text": "If the objects behave as particles, then they will be grouped into two regions on the screen.",
        "correct": false
      }
    ]
  },
  {
    "id": 17,
    "quiz": "PHY127",
    "title": "Quantum world",
    "type": "multiple",
    "question": "Which of the following statements are RIGHT which are WRONG?",
    "options": [
      {
        "text": "If one doubles the frequency of a standing wave, the wavelength also doubles.",
        "correct": false
      },
      {
        "text": "The wave function is a measure of the amplitude of a wave as a function of time and space.",
        "correct": true
      },
      {
        "text": "Wave equations are solutions to the wave function.",
        "correct": false
      },
      {
        "text": "On a string, one can increase the velocity of a standing wave by either increasing the tension on the string, or decreasing the mass per length of the string.",
        "correct": true
      },
      {
        "text": "The formula y(x) = A sin (5 pi x / L ) describes the amplitude of a standing wave on a string of length L, with a wavelength that is 2/5th the length of the string.",
        "correct": true
      },
      {
        "text": "The energy, power, and intensity of a wave are proportional to the square of the amplitude of the wave.",
        "correct": true
      }
    ]
  },
  {
    "id": 18,
    "quiz": "PHY127",
    "title": "Free Will",
    "type": "single",
    "question": "I have free will (freier Wille / Willensfreiheit) to make my own decisions independent of my genetic makeup and upbringing.",
    "options": [
      {
        "text": "Yes.",
        "correct": false
      },
      {
        "text": "I am not sure.",
        "correct": false
      },
      {
        "text": "I am not sure about this, but determinism (Determinismus) is not possible due to quantum mechanics.",
        "correct": true
      },
      {
        "text": "No.",
        "correct": false
      }
    ]
  },
  {
    "id": 19,
    "quiz": "PHY127",
    "title": "Interference",
    "type": "multiple",
    "question": "Which answers are correct about interference and diffraction ?",
    "options": [
      {
        "text": "Interference is only for waves, while diffraction is only for particles.",
        "correct": false
      },
      {
        "text": "Diffraction can happen when a wave goes through a single hole, whereas interference can happen when a wave goes through multiple holes.",
        "correct": true
      },
      {
        "text": "Diffraction produces a central maximum, while interference produces multiple maxima.",
        "correct": true
      }
    ]
  },
  {
    "id": 20,
    "quiz": "PHY127",
    "title": "Diffraction pattern",
    "type": "multiple",
    "question": "Consider a wave producing a diffraction pattern on a screen after going through a single slit. True or False.",
    "options": [
      {
        "text": "If the slit gets smaller, the locations of the dark spots gets further apart. If the distance between the slit and the screen increases, the locations of the dark spots gets further apart.",
        "correct": true
      },
      {
        "text": "If the distance between the slit and the screen increases, the locations of the dark spots gets further apart.",
        "correct": true
      },
      {
        "text": "If the wavelength of the light decreases, the locations of the dark spots gets further apart.",
        "correct": false
      }
    ]
  },
  {
    "id": 21,
    "quiz": "PHY127",
    "title": "Electrons",
    "type": "multiple",
    "question": "Electrons pass through a crystal lattice and are measured on a screen as several rings.",
    "options": [
      {
        "text": "Electrons are particles not waves. This is a trick question.",
        "correct": false
      },
      {
        "text": "The radii of the rings tells us how far apart the atoms in the crystal lattice are.",
        "correct": true
      },
      {
        "text": "The brightness of the rings tells us how far apart the atoms in the crystal lattice are.",
        "correct": false
      },
      {
        "text": "Since there are diffraction rings, it must mean that each electron travels to the screen in multiple ways.",
        "correct": true
      }
    ]
  },
  {
    "id": 22,
    "quiz": "PHY127",
    "title": "Matter waves",
    "type": "multiple",
    "question": "Which are true ?",
    "options": [
      {
        "text": "If we have a particle with only one wavelength, we cannot determine at all where it is.",
        "correct": true
      },
      {
        "text": "If we have a particle that has a range of wavelengths, we can find it in a range of positions.",
        "correct": true
      },
      {
        "text": "For a wave packet, the group velocity is always slower than the phase velocity.",
        "correct": false
      }
    ]
  },
  {
    "id": 23,
    "quiz": "PHY127",
    "title": "Schroedinger equation",
    "type": "multiple",
    "question": "Assume you are solving the Schroedinger wave equation for a particle in a box. Which are true ?",
    "options": [
      {
        "text": "Are you kidding ? I can't solve the Schroedinger equation.",
        "correct": false
      },
      {
        "text": "The wave function must satisfy boundary conditions.",
        "correct": true
      },
      {
        "text": "Squaring the wave function tells us where the particle is most likely to be found.",
        "correct": true
      },
      {
        "text": "We can determine the constant that multiples the wave function by requiring that the particle is in the box.",
        "correct": true
      }
    ]
  },
  {
    "id": 24,
    "quiz": "PHY127",
    "title": "Waves",
    "type": "single",
    "question": "Which one is false about a quantum waves.",
    "options": [
      {
        "text": "As the quantum number increases, the wave looks more like a classical particle.",
        "correct": false
      },
      {
        "text": "The energy of a quantum system can have continuum of values.",
        "correct": false
      },
      {
        "text": "As the quantum number increases, the energy decreases.",
        "correct": true
      }
    ]
  },
  {
    "id": 25,
    "quiz": "PHY127",
    "title": "Electrons in atoms",
    "type": "multiple",
    "question": "For each of the following statements, decide whether it is true or false.",
    "options": [
      {
        "text": "In Bohr's hypothesis, the atom is a blackbody, and so it radiates heat by emitting photons.",
        "correct": false
      },
      {
        "text": "Classical theories of the atom fail because they only predict that certain energy transitions are possible, but in reality, all energy transitions are possible.",
        "correct": false
      },
      {
        "text": "The angular momentum of an electron is quantized in a hydrogen atom.",
        "correct": true
      },
      {
        "text": "The electron in an atom can be thought of as a standing wave.",
        "correct": true
      },
      {
        "text": "The radius of an electron in a hydrogen atom is proportional to the square of its quantum number.",
        "correct": true
      },
      {
        "text": "The energy of a hydrogen atom is proportional to the square of its quantum number.",
        "correct": false
      },
      {
        "text": "For a particle trapped in a 3-dimensional box, there are 3 quantum numbers, representing the momentum of the particle in 3 dimensions.",
        "correct": true
      },
      {
        "text": "A quantum system is said to be degenerate when certain quantum numbers are not possible.",
        "correct": false
      }
    ]
  },
  {
    "id": 26,
    "quiz": "PHY127",
    "title": "Moving particles",
    "type": "multiple",
    "question": "Which of the following are true, which are wrong?",
    "options": [
      {
        "text": "Every particle moving with respect to the origin of a coordinate system has angular momentum.",
        "correct": false
      },
      {
        "text": "Every particle moving in a circle with respect to the origin of a coordinate system has angular momentum.",
        "correct": true
      },
      {
        "text": "Every charged particle moving in a circle with respect to the origin of a coordinate system has a magnetic moment.",
        "correct": true
      }
    ]
  },
  {
    "id": 27,
    "quiz": "PHY127",
    "title": "Charged particles",
    "type": "multiple",
    "question": "What is true about a charged particle moving in a circle?",
    "options": [
      {
        "text": "The larger its electric charge, the greater its magnetic moment.",
        "correct": true
      },
      {
        "text": "The larger its orbital radius, the greater its magnetic moment.",
        "correct": true
      },
      {
        "text": "The greater its mass, for the same angular momentum, the greater its magnetic moment.",
        "correct": false
      }
    ]
  },
  {
    "id": 28,
    "quiz": "PHY127",
    "title": "Atoms",
    "type": "multiple",
    "question": "True or false:",
    "options": [
      {
        "text": "A hydrogen atom can only have a primary quantum number equal to 1 because it only has one electron.",
        "correct": false
      },
      {
        "text": "An atom that has a primary quantum number equal to 3 can have 3 possible angular momentum values.",
        "correct": true
      },
      {
        "text": "An atom is in a magnetic field pointing in the z direction. If it has a orbital angular momentum quantum number equal to 3, it can have 5 possible values of z components of its angular momentum.",
        "correct": false
      }
    ]
  },
  {
    "id": 29,
    "quiz": "PHY127",
    "title": "Hydrogen",
    "type": "multiple",
    "question": "The energy of a hydrogen atom is either proportional to or at least increasing with the following:",
    "options": [
      {
        "text": "The electric charge of the nucleus squared.",
        "correct": true
      },
      {
        "text": "The principal quantum number squared.",
        "correct": true
      },
      {
        "text": "The fundamental unit of electric charge to the 4th power.",
        "correct": true
      },
      {
        "text": "There mass of the electron squared.",
        "correct": false
      }
    ]
  },
  {
    "id": 30,
    "quiz": "PHY127",
    "title": "States",
    "type": "multiple",
    "question": "What happens when a hydrogen atom is in the state and drops to ? (last statement should be n=2 not n=1)",
    "options": [
      {
        "text": "The binding energy of the electron (attraction of the electron to the nucleus) decreases.",
        "correct": false
      },
      {
        "text": "A photon is released with a frequency equal to the difference in energy between the and states divided by the Planck constant.",
        "correct": true
      },
      {
        "text": "The new value of can either be 1 or 3.",
        "correct": false
      },
      {
        "text": "The probability of finding the electron after the transition depends only on the radius of the electron.",
        "correct": false
      },
      {
        "text": "Because electrons have spin, when an atom is in a magnetic field, there are actually 2 possible energy levels for the level.",
        "correct": true
      }
    ]
  },
  {
    "id": 31,
    "quiz": "PHY127",
    "title": "Screening",
    "type": "single",
    "question": "Which of the following is not a correct explanation of screening?",
    "options": [
      {
        "text": "Screening is the process by which a metal screen is used as a cathode to produce X-rays.",
        "correct": true
      },
      {
        "text": "Screening means that electrons in outer orbitals feel less of a total electric field than inner electrons.",
        "correct": false
      },
      {
        "text": "Screening means that when an X-ray knocks out an inner electron from an atom and a new electron from a higher level takes its place, to calculate the wavelength of the emitted X-ray with the Rydberg formula, we must use a lower value of Z than the number of protons in the atom.",
        "correct": false
      }
    ]
  },
  {
    "id": 32,
    "quiz": "PHY127",
    "title": "Electrons and photons",
    "type": "multiple",
    "question": "True or False?",
    "options": [
      {
        "text": "Two electrons in an atom with the same n, l, and m quantum numbers must have different oppositely aligned spins.",
        "correct": true
      },
      {
        "text": "A Geiger-Muller counter is a way to produce X-rays.",
        "correct": false
      },
      {
        "text": "Only 2 electrons can occupy one quantum state, because electrons are fermions.",
        "correct": false
      },
      {
        "text": "A photomultiplier is a way to detect photons.",
        "correct": true
      }
    ]
  },
  {
    "id": 33,
    "quiz": "PHY127",
    "title": "X-ray",
    "type": "multiple",
    "question": "Thinking of the X-ray experiments done in class, which are true ?",
    "options": [
      {
        "text": "Increasing the current of the electrons used to produce X-rays means that X-rays will produce more contrast.",
        "correct": true
      },
      {
        "text": "X-rays are produced with a higher intensity for certain wavelengths that correspond to atomic transitions.",
        "correct": true
      },
      {
        "text": "X-rays are stopped by lead shielding.",
        "correct": true
      },
      {
        "text": "Increasing the voltage used to produce X-rays means the X-rays will have higher wavelengths.",
        "correct": false
      }
    ]
  },
  {
    "id": 34,
    "quiz": "PHY127",
    "title": "Scattering",
    "type": "multiple",
    "question": "Which are true which are wrong?",
    "options": [
      {
        "text": "During the photoelectric effect, a photon gives its energy to an electron, which then is always emitted from the material.",
        "correct": false
      },
      {
        "text": "During Thomson scattering, the photon keeps the same direction, but loses some energy.",
        "correct": false
      },
      {
        "text": "During Compton scattering, the photon changes direction, but keeps the same energy.",
        "correct": false
      }
    ]
  },
  {
    "id": 35,
    "quiz": "PHY127",
    "title": "Attenuation",
    "type": "multiple",
    "question": "Which statements are true and which are wrond about attenuation of X-rays ?",
    "options": [
      {
        "text": "X-rays are reduced in intensity according to a falling exponential function.",
        "correct": true
      },
      {
        "text": "If the energy is bigger, the attenuation is bigger.",
        "correct": false
      },
      {
        "text": "If the energy is bigger, the X-ray will penetrate more.",
        "correct": true
      },
      {
        "text": "The intensity measured by an X-ray detector will be higher if the X-rays have higher energy.",
        "correct": true
      },
      {
        "text": "The intensity measured by an X-ray detector will be higher if the X-rays pass through 5 cm of bone rather than muscle.",
        "correct": false
      },
      {
        "text": "The attenuation coefficient ft is more different between different materials than the mass attenuation coefficient, which is ft divided by the density of the material.",
        "correct": true
      }
    ]
  },
  {
    "id": 36,
    "quiz": "PHY127",
    "title": "Radiation dose",
    "type": "multiple",
    "question": "Which are true and which are false about the dose of radiation ?",
    "options": [
      {
        "text": "The exposure dose measures the amount of electric charge liberated per kilogram of material that the radiation traverses.",
        "correct": true
      },
      {
        "text": "From natural exposure, cosmic radiation provides about 10% of our total exposure dose.",
        "correct": true
      },
      {
        "text": "A common way to measure radiation dose is the amount of energy deposited in a material per kg.",
        "correct": true
      },
      {
        "text": "The effect of radiation dose in terms of physiological damage to the human body depends on the part of the body, the type of radiation, and the energy absorbed by the body.",
        "correct": true
      },
      {
        "text": "The two units, Gray and Sievert, are equivalent if the radiation is X-rays and the radiation is distributed to a whole human body.",
        "correct": true
      },
      {
        "text": "The human body will get more damage from receiving 1 Gy of energy dose two times than if the human body received one dose of 2 Gy.",
        "correct": false
      },
      {
        "text": "Medical procedures typically produce equivalent doses of 100 Gy.",
        "correct": false
      }
    ]
  },
  {
    "id": 37,
    "quiz": "PHY127",
    "title": "X-rays in tissue",
    "type": "multiple",
    "question": "What is right or what is wrong in context with soft tissue X-ray :",
    "options": [
      {
        "text": "Injecting or ingesting dense chemicals into the body can allow soft tissue to be X-rayed.",
        "correct": true
      },
      {
        "text": "Increasing the energy of X-rays can allow soft tissue to be X-rayed.",
        "correct": false
      }
    ]
  },
  {
    "id": 38,
    "quiz": "PHY127",
    "title": "Pixels",
    "type": "single",
    "question": "Assume that we are imaging a body uniformly with X-rays, and with a sensor we make 100 measurements of the intensity of the X-rays through the body. What is the largest number of pixels that we can have in our image of the body ?",
    "options": [
      {
        "text": "10",
        "correct": false
      },
      {
        "text": "10000",
        "correct": false
      },
      {
        "text": "100",
        "correct": true
      }
    ]
  },
  {
    "id": 39,
    "quiz": "PHY127",
    "title": "Colored X-rays",
    "type": "multiple",
    "question": "What do the colors mean in an X-ray ?",
    "options": [
      {
        "text": "In a \"positiv\", also called inverted x-ray, whiter parts of an X-ray are where the X-ray has attenuated more.",
        "correct": false
      },
      {
        "text": "In a color scaled X-ray, each color can represent a type of tissue.",
        "correct": true
      }
    ]
  },
  {
    "id": 40,
    "quiz": "PHY127",
    "title": "Gamma rays",
    "type": "multiple",
    "question": "At energies above about 1 MeV, we usually call photons \"gamma rays\" instead of X-rays. For a 100 MeV gamma ray, how does it lose its energy inside a material ?",
    "options": [
      {
        "text": "If the gamma ray does interact, it most likely will pair-produce an electron and a positron. The positron will quickly annihilate with an electron and produces a gamma ray of at least 1 MeV.",
        "correct": true
      },
      {
        "text": "The gamma ray will pair-produce into an electron and a positron. These particles then fly out of the body.",
        "correct": false
      },
      {
        "text": "If the 1 MeV gamma ray interacts with the material, it will most likely be by Compton scattering.",
        "correct": true
      }
    ]
  },
  {
    "id": 41,
    "quiz": "PHY127",
    "title": "PET scan - limits",
    "type": "multiple",
    "question": "What are the limiting factors in the resolution of images produced by PET scans ?",
    "options": [
      {
        "text": "If the positron produced has momentum, then the gamma rays it produces will not be back to back.",
        "correct": true
      },
      {
        "text": "If the positron travels in the material before annihilating, then it will not be measured where it was produced.",
        "correct": true
      }
    ]
  },
  {
    "id": 42,
    "quiz": "PHY127",
    "title": "PET scan - advantages",
    "type": "multiple",
    "question": "What are the good things about PET scans ?",
    "options": [
      {
        "text": "One can correlate measurements to the activity of certain organs.",
        "correct": true
      },
      {
        "text": "One can measure any tissue, regardless of how dense it is.",
        "correct": true
      },
      {
        "text": "One can observe time-dependent effects like metabolism.",
        "correct": true
      }
    ]
  },
  {
    "id": 43,
    "quiz": "PHY127",
    "title": "3D X-ray",
    "type": "multiple",
    "question": "How can we get better (position resolution) with 3D X-ray tomography ?",
    "options": [
      {
        "text": "Extremely slow scans of the object.",
        "correct": false
      },
      {
        "text": "More focused X-ray",
        "correct": true
      },
      {
        "text": "Higher X-ray energies for soft tissue.",
        "correct": false
      },
      {
        "text": "Phase-contrast imaging",
        "correct": true
      }
    ]
  },
  {
    "id": 44,
    "quiz": "PHY127",
    "title": "X-ray attenuation",
    "type": "multiple",
    "question": "What is true about phase-contrast imaging ?",
    "options": [
      {
        "text": "When an X-ray moves through a material, the amplitude is attenuated.",
        "correct": true
      },
      {
        "text": "When an X-ray moves through a material, it's wavelength gets decreased.",
        "correct": false
      },
      {
        "text": "Phase-contrast imaging is better than X-ray attenuation for imaging soft tissue with small sizes.",
        "correct": true
      },
      {
        "text": "Phase-contrast imaging gets better at low X-ray energies",
        "correct": false
      },
      {
        "text": "Phase-contrast imaging produces less radioactive dose.",
        "correct": true
      }
    ]
  },
  {
    "id": 45,
    "quiz": "PHY127",
    "title": "Fresnel zone plate",
    "type": "multiple",
    "question": "Which explanations are true for how a Fresnel zone plate works ?",
    "options": [
      {
        "text": "It amplifies electromagnetic radiation.",
        "correct": false
      },
      {
        "text": "It can increase the intensity of electromagnetic radiation measured at the locations of constructive interference maxima.",
        "correct": true
      },
      {
        "text": "One needs rings with radii that are proportional to the wavelength of the light.",
        "correct": false
      },
      {
        "text": "One needs rings with radii that are proportional to the square root of the focal length.",
        "correct": true
      }
    ]
  },
  {
    "id": 46,
    "quiz": "PHY127",
    "title": "Synchrotron",
    "type": "multiple",
    "question": "What is true and what is wrond about a synchrotron ?",
    "options": [
      {
        "text": "Oscillating electric fields in RF cavities change the electron direction, bending it.",
        "correct": false
      },
      {
        "text": "The frequency of electrons in the synchrotron to go around the ring can get bigger than .",
        "correct": false
      },
      {
        "text": "The best spatial resolutions can be achieved with synchrotrons.",
        "correct": true
      },
      {
        "text": "Electron speed is accelerated using magnetic fields.",
        "correct": false
      },
      {
        "text": "The bigger the radius of the synchrotron, the smaller the magnetic field is needed for the same momentum electrons.",
        "correct": true
      },
      {
        "text": "Electron beams that are bent strongly in a magnetic field will give off photon radiation.",
        "correct": true
      }
    ]
  },
  {
    "id": 47,
    "quiz": "PHY127",
    "title": "Electron lasers",
    "type": "multiple",
    "question": "What is true about free electron lasers (FEL)?",
    "options": [
      {
        "text": "X-rays are produced incoherently.",
        "correct": false
      },
      {
        "text": "X-rays are produced with much higher intensity than other X-ray sources.",
        "correct": true
      },
      {
        "text": "FELs have the best time resolution, allowing atomic-scale processes to be imaged in real time.",
        "correct": true
      },
      {
        "text": "FELs also achieve the best spatial resolutions.  0% of 12",
        "correct": true
      }
    ]
  },
  {
    "id": 48,
    "quiz": "PHY127",
    "title": "Movements",
    "type": "multiple",
    "question": "Which statements are true about linear and rotational movement ?",
    "options": [
      {
        "text": "A net force applied to an object will cause it to accelerate.",
        "correct": true
      },
      {
        "text": "A net torque applied to an object moving in a circle will cause its angular momentum to change directions.",
        "correct": true
      },
      {
        "text": "An object spinning with angular momentum parallel to an external force will precess.",
        "correct": false
      },
      {
        "text": "An object spinning with angular momentum perpendicular to an external force feel a torque.",
        "correct": true
      },
      {
        "text": "The precession frequency of an object with spin depends on the torque applied to it and its angular momentum.",
        "correct": true
      }
    ]
  },
  {
    "id": 49,
    "quiz": "PHY127",
    "title": "Nuclei",
    "type": "multiple",
    "question": "Which statements are true about nuclei ?",
    "options": [
      {
        "text": "All nuclei have magnetic moments.",
        "correct": false
      },
      {
        "text": "All nuclei are composed of quarks.",
        "correct": true
      },
      {
        "text": "Nuclei with magnetic moments will precess in a magnetic field. The energy required to flip the magnetic moment of a nuclei in a magnetic field is much larger than the thermal",
        "correct": true
      },
      {
        "text": "energy the nuclei has at room temperature.",
        "correct": false
      },
      {
        "text": "When a nuclei flips to a lower energy state in a magnetic field, it will emit an X-ray. If a material is exposed to radio frequency photons while in an external magnetic field, it will relax to equilibrium by",
        "correct": false
      },
      {
        "text": "emitting RF photons. One can measure the change in magnetic moment of a material because it will induce an electric current in a",
        "correct": true
      },
      {
        "text": "solenoid.  0% of 15",
        "correct": true
      }
    ]
  },
  {
    "id": 50,
    "quiz": "PHY127",
    "title": "Nuclear physics",
    "type": "multiple",
    "question": "In nuclear physics, which are true:",
    "options": [
      {
        "text": "A nucleus is much bigger than an atom because it has higher energy levels.",
        "correct": false
      },
      {
        "text": "To measure smaller nuclear structures, electrons with larger deBroglie wavelengths are needed.",
        "correct": false
      },
      {
        "text": "The density of a proton is similar to the density of Uranium.",
        "correct": true
      },
      {
        "text": "If two protons are close enough together, they are attracted to each other.",
        "correct": true
      },
      {
        "text": "Inside a nucleus, the electromagnetic force is stronger than the nuclear force.",
        "correct": false
      },
      {
        "text": "It is easier for a nucleus to capture incoming proton than a neutron.",
        "correct": false
      },
      {
        "text": "All nuclei have a smaller mass than the mass of all their protons and neutrons.",
        "correct": true
      }
    ]
  },
  {
    "id": 51,
    "quiz": "PHY127",
    "title": "NMR and MRI",
    "type": "multiple",
    "question": "Which of the following can be done with NMR and MRI ?",
    "options": [
      {
        "text": "The magnetic moment can be changed to change tumorous tissue into healthy tissue.",
        "correct": false
      },
      {
        "text": "The number of local chemical groups with hydrogen within a complex molecule can be determined.",
        "correct": true
      },
      {
        "text": "The location of the chemical groups in the larger molecule can be determined.",
        "correct": true
      },
      {
        "text": "The number of hydrogen atoms within a chemical group can be determined.",
        "correct": true
      },
      {
        "text": "Tissue types can be measured, but the process is destructive.",
        "correct": false
      },
      {
        "text": "The type of tissue can be distinguished using the measured water content.",
        "correct": true
      },
      {
        "text": "Healthy tissue can be distinguished from tumorous tissue by the relaxation time of the magnetic moments. By using a magnetic field gradient in 1 dimension, NMR signals can be tuned to only receive signals from a specific",
        "correct": true
      },
      {
        "text": "x,y,z coordinate.  0% of 20",
        "correct": false
      }
    ]
  },
  {
    "id": 52,
    "quiz": "PHY127",
    "title": "Energy production",
    "type": "multiple",
    "question": "Which of the following are commercially viable technologies for producing energies by humans ?",
    "options": [
      {
        "text": "Nuclear fusion reactors",
        "correct": false
      },
      {
        "text": "Nuclear fission reactors",
        "correct": true
      },
      {
        "text": "Sub-critical nuclear reactors",
        "correct": false
      }
    ]
  },
  {
    "id": 53,
    "quiz": "PHY127",
    "title": "Stable nuclei",
    "type": "single",
    "question": "Which is false?",
    "options": [
      {
        "text": "Stable nuclei tend to have more neutrons than protons.",
        "correct": false
      },
      {
        "text": "A more stable nuclei has a lower binding energy than a less stable nuclei.",
        "correct": true
      },
      {
        "text": "A nuclei with 2 protons and 2 neutrons is more stable than a nuclei with 1 proton and 3 neutrons.",
        "correct": false
      }
    ]
  },
  {
    "id": 54,
    "quiz": "PHY127",
    "title": "Energy loss of radiation",
    "type": "multiple",
    "question": "What is right and what is wrong?",
    "options": [
      {
        "text": "When moving slowly compared to the speed of light, charged particles deposit less energy.",
        "correct": false
      },
      {
        "text": "Energy loss per distance divided by density is larger for materials with more neutrons.",
        "correct": false
      },
      {
        "text": "Charged particles moving close to the speed of light always deposit energies between about 3 and 7 MeV/cm.",
        "correct": true
      },
      {
        "text": "Because of the Bragg peak, gamma rays deposit most of their energy at the moment they stop.",
        "correct": false
      },
      {
        "text": "Proton therapy causes less healthy tissue damage than gamma ray therapy.",
        "correct": true
      }
    ]
  },
  {
    "id": 55,
    "quiz": "PHY127",
    "title": "Types of radiation",
    "type": "multiple",
    "question": "Which are right and which are wrong? --- PAGE 41 ---",
    "options": [
      {
        "text": "If I measure the amount of C, C and C in dinosaur fossils, I can tell how old the fossils are.",
        "correct": false
      },
      {
        "text": "A gamma decay changes only the number of neutrons, not the number of protons.",
        "correct": false
      },
      {
        "text": "Beta and gamma radiation bend in a magnetic field, but alphas do not.",
        "correct": false
      },
      {
        "text": "A beta decay will change an element into a new element with less protons.",
        "correct": false
      },
      {
        "text": "Gamma rays can be shielded with a few sheets of aluminum.",
        "correct": false
      },
      {
        "text": "When a neutron decays, an electron is produced.",
        "correct": true
      },
      {
        "text": "A W boson can change a u quark into an electron. Alpha radiation is better for treating brain tumors than gamma radiation because it causes a high radioactive dose",
        "correct": false
      },
      {
        "text": "factor (RBE).",
        "correct": false
      },
      {
        "text": "The half-life of a particle is equal to half of its time decay constant.",
        "correct": false
      },
      {
        "text": "An alpha decay will change an element into a new element with two less protons.",
        "correct": true
      },
      {
        "text": "Neutrinos from radioactive decay are dangerous.",
        "correct": false
      }
    ]
  }
];
