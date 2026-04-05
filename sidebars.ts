import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'Starter',
    'ChangelogFirmware',
    'device-description',
    'Switching-Mnemo-ON',
    'Menu-Navigation',
    'Menus-Overview',
    'Main-Menu',
    {
      type: 'category',
      label: 'Calibrating the Unit',
      link: { type: 'doc', id: 'Calibrating-the-unit' },
      items: [
        'Setting-the-Unit-System',
        'Calibrating-the-distance-measurement',
        'Calibrating-the-compass',
      ],
    },
    {
      type: 'category',
      label: 'Survey Mode',
      link: { type: 'doc', id: 'Survey-Mode' },
      items: [
        'Survey-Flow',
        'BASIC-Mode',
        'BASIC-Mode-Clicks',
        'Verbose-Mode',
        'Recording-Surface-pressure',
        'LRUD',
        'Interference-Marker',
        'About-Stabilization',
        'Surveying-The-big-picture',
      ],
    },
    'Survey-History',
    'memory',
    {
      type: 'category',
      label: 'Settings',
      items: [
        'Setting-the-water-type',
        'Display-Settings',
        'Language',
      ],
    },
    'Date-Synchronization',
    'Battery',
    'Extras',
    'MNEMOLINK',
    'WIFI-Data-transfer',
    'Firmware-Upgrade',
    'Maintenance',
    'tipsandtricks',
    'Report-an-Issue',
  ],
};

export default sidebars;
