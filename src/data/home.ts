/**
 * All homepage text lives in this file; components contain no text.
 * The shape is defined in ./home.types.ts.
 */
import type {HomeData} from './home.types';

const GITHUB = 'https://github.com/serhii-matsyshyn';
const SOON = 'Will be published soon';
const VIEW = 'View repository';

export const home: HomeData = {
  meta: {
    title: 'BioListener',
    description:
      'BioListener is a startup developing an open-source biosensing ecosystem: hardware, firmware, and software for EEG, EMG, ECG, and EOG, scientifically validated and open for anyone to build on.',
  },

  hero: {
    logo: {src: '/img/logo/biolistener-logo.png', alt: 'BioListener', width: 1600, height: 178},
    headline: 'An open-source ecosystem designed to revolutionize biosensing',
    headlineAccent: 'revolutionize biosensing',
    subline:
      'BioListener is a startup developing an open-source ecosystem built around portable, affordable, multi-channel biosensing boards.\nOur goal is to make biosensing accessible: instead of one costly device per group, everyone can have their own scientifically validated board to run hands-on experiments, do cross-disciplinary research, and build more complex devices.',
    signals: [
      {abbr: 'EEG', name: 'Brain'},
      {abbr: 'EMG', name: 'Muscles'},
      {abbr: 'ECG', name: 'Heart'},
      {abbr: 'EOG', name: 'Eyes'},
    ],
    actions: [
      {label: 'Contact us', href: '/#contact', variant: 'primary'},
      {label: 'See the ecosystem', href: '/#ecosystem', variant: 'secondary'},
    ],
    stats: [
      {value: '$30', label: 'Estimated cost per 8-channel board'},
      {value: '24-bit', label: 'ADCs for precise signal capture'},
      {value: '2000 Hz', label: 'Per channel, up to, at current firmware version'},
      {value: '54 g', label: 'Total weight with battery and 3D-printed enclosure'},
    ],
    photo: {
      src: '/img/hardware/board-v1-cutout.png',
      alt: 'BioListener v1.0 biosensing board',
      width: 1600,
      height: 1174,
      caption: 'BioListener board v1.0',
    },
  },

  aims: {
    heading: {
      id: 'aims',
      eyebrow: 'Our aim',
      title: 'Accessible, validated, and open to build on',
      lead: 'We are building an open-source biosensing ecosystem, hardware and software together. It is not just a board for education: it is a framework any student can use as the basis for their own device.',
    },
    points: [
      {
        label: 'Why it is needed',
        text: 'Biosensing boards record signals from the brain (EEG), muscles (EMG), heart (ECG), and eyes (EOG). Budgets often limit a group to one costly device, and the low-cost projects we reviewed require extensive programming and electronics experience.',
      },
      {
        label: 'What makes it different',
        text: 'It works as a dev board and a template: simple cross-disciplinary projects need no huge rewrites. Signal quality is scientifically validated, and the results are published. An 8-channel board costs an estimated $30. It is built for first-time users. Two board designs use different converter (ADC) chips, for resilience against chip shortages.',
      },
      {
        label: 'What exists today',
        text: 'Two working board designs, Wi-Fi firmware, a 3D-printed case, BrainFlow and OpenBCI GUI support, and a published evaluation with EEG, EMG, and ECG recordings. BioListener Sleep, a research system for closed-loop neurostimulation, is built on the board.',
      },
      {
        label: 'What comes next',
        text: 'Near term: board designs finalized for mass production, Bluetooth, offline recording to SD card, daisy-chaining to 16 channels, and plug-and-play apps. The larger aim: modular add-ons and accompanying research projects that apply the ecosystem in practice, with BioListener Sleep as the first.',
      },
    ],
  },

  ecosystem: {
    heading: {
      id: 'ecosystem',
      eyebrow: 'Ecosystem',
      title: 'Hardware and software in one ecosystem',
      lead: 'Boards, firmware, a case, software integrations, and evaluation tools, built to work together. Fully open-source.',
    },
    cards: [
      {
        icon: 'circuit',
        title: 'BioListener Hardware',
        text: 'Two working 8-channel board designs, each built on a different ADC chip.',
        status: {label: 'v1.1', tone: 'neutral'},
        link: {kind: 'link', label: VIEW, href: `${GITHUB}/biolistener_hardware`},
      },
      {
        icon: 'cpu',
        title: 'BioListener Firmware',
        text: 'ESP32 firmware that streams biosignals over Wi-Fi to BrainFlow in real time.',
        status: {label: 'Wi-Fi', tone: 'neutral'},
        link: {kind: 'link', label: VIEW, href: `${GITHUB}/biolistener_firmware`},
      },
      {
        icon: 'box',
        title: 'BioListener 3D Models',
        text: 'A case for the boards that prints on a regular FDM 3D printer.',
        status: {label: 'Published', tone: 'neutral'},
        link: {kind: 'link', label: VIEW, href: `${GITHUB}/biolistener_3d_models`},
      },
      {
        icon: 'code',
        title: 'BrainFlow integration',
        text: 'BioListener boards are supported in official BrainFlow, a library for reading and analyzing biosensor data.',
        status: {label: 'Official', tone: 'accent'},
        link: {kind: 'link', label: 'View in BrainFlow docs', href: 'https://brainflow.readthedocs.io/en/stable/SupportedBoards.html#biolistener'},
      },
      {
        icon: 'monitor',
        title: 'OpenBCI GUI integration',
        text: 'Board support in OpenBCI GUI, for visualizing the data in real time.',
        status: {label: 'Fork', tone: 'neutral'},
        link: {kind: 'link', label: VIEW, href: `${GITHUB}/biolistener_OpenBCI_GUI`},
      },
      {
        icon: 'gauge',
        title: 'BioListener Evaluation',
        text: 'Scripts, data, and test setups for evaluating board performance and real-world use.',
        status: {label: 'Published', tone: 'neutral'},
        link: {kind: 'link', label: VIEW, href: `${GITHUB}/biolistener_evaluation`},
      },
    ],
  },

  sleepTeaser: {
    id: 'sleep',
    title: 'BioListener Sleep',
    text: 'A closed-loop neurostimulation system for sleep onset optimization. It adapts stroboscopic light and generative audio to live EEG from the BioListener board. Researched in simulation; not a medical device.',
    status: {label: 'Research stage', tone: 'accent'},
    link: {label: 'See how it works', href: '/sleep'},
    soonLabel: SOON,
    image: {
      src: '/img/sleep/led-sleep-mask-prototype.jpg',
      alt: 'Stroboscopic LED sleep mask prototype with its ESP32 controller',
      width: 1600,
      height: 1242,
    },
  },

  contact: {
    id: 'contact',
    title: 'Get in touch',
    text: 'Questions, collaboration, or contributions: write to us, or open an issue or pull request in the relevant repository.',
    email: 'contact@biolistener.com',
    actions: [{label: 'View on GitHub', href: `${GITHUB}/biolistener`, variant: 'secondary'}],
  },
};

export default home;
