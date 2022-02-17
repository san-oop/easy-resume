const DATA = {
  BASIC_DETAILS: {
    name: 'Alice Bob',
    currentRole: 'Senior Manager',
    currentLocation: 'London',
    phoneNumber: '+1234567890',
    primaryEmailId: 'alicebob@test.com',
    yourProfiles: [
      {
        icon: 'fa-github',
        url: 'https://github.com/',
        text: 'https://github.com/',
      },
      {
        icon: 'fa-linkedin',
        url: 'https://www.linkedin.com/',
        text: 'linkedin.com/',
      },
    ],
  },
  SUMMARY: {
    primary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce bibendum ligula scelerisque, placerat diam ut, dictum tortor. Nulla vitae erat eu justo tincidunt congue. Cras eget iaculis metus.',
    secondary:
      'Ut imperdiet nibh ut pulvinar euismod. Vestibulum dapibus urna mauris, a placerat nisi venenatis eu. Etiam auctor hendrerit rutrum. Sed et tristique neque, vel dignissim metus.Ut sodales lectus eu molestie lobortis. Pellentesque pulvinar lacus turpis, sit amet vulputate mi vehicula ac.',
  },
  SKILLS_AND_ABILITIES: [
    {
      title: 'Skill title 1',
      skills: 'skill 1, skill 2, skill 2a, skill 2b',
    },
    {
      title: 'Skill title 2',
      skills: 'skill 3, skill 4',
    },
    {
      title: 'Skill title 3',
      skills: 'skill 5, skill 6, skill 6a',
    },
    {
      title: 'Skill title 4',
      skills: 'skill 7',
    },
  ],
  PREVIOUS_EXPIRIENCE: [
    {
      companyName: 'Company Name One',
      workSpan: 'January 2021 - Present',
      description:
        'Quisque quis neque finibus ante venenatis vestibulum in tincidunt dolor. Nam tincidunt quis felis vel sodales. Aliquam pellentesque risus tincidunt erat iaculis vulputate. Donec a ornare sapien.',
    },
    {
      companyName: 'Company Name Two',
      workSpan: 'January 2019 - January 2021',
      description:
        'Nam elementum suscipit erat, quis volutpat arcu faucibus sed. Donec placerat mauris ut sapien aliquam euismod. Vivamus ut lorem sed magna faucibus vehicula id eget mi. Integer dapibus, enim nec porta tristique, lorem libero mattis odio, id finibus magna odio ac ex. Nam vitae scelerisque velit.',
    },
    {
      companyName: 'Company Name Three',
      workSpan: 'January 2015 - January 2019',
      description:
        'Fusce ullamcorper tortor non mi commodo, et ornare enim posuere. Donec placerat metus et est porta, at semper sem ullamcorper. Praesent sollicitudin euismod justo sed viverra.',
    },
  ],
  NOTABLE_PROJECTS: [
    {
      title: 'Suspendisse lacinia convallis nisi, eu imperdiet risus dapibus quis.',
      keyPoints: [{
        id: 1,
        value: 'Nullam mattis, leo quis gravida eleifend, nunc quam sagittis enim, sed cursus eros ligula eu neque.',
      },
      {
        id: 2,
        value: 'Suspendisse vel nunc at risus pellentesque suscipit.',
      },
      {
        id: 3,
        value: 'Phasellus molestie, mauris eu pharetra fringilla, lectus orci convallis magna, quis tincidunt dolor arcu quis nisi.',
      },
      {
        id: 4,
        value: 'In dapibus lectus dui, eu pharetra sem congue id. Maecenas id pellentesque tortor. Praesent consectetur eleifend sem, eu dictum sapien vestibulum ac.',
      }],
    },
    {
      title: 'Sed maximus ullamcorper volutpat. Nam volutpat diam arcu, id tincidunt erat lacinia vitae. ',
      keyPoints: [{
        id: 1,
        value: 'Curabitur nec lacus id erat consequat imperdiet id et enim. Etiam at molestie ipsum, eu aliquet elit.',
      },
      {
        id: 2,
        value: 'Aenean rutrum ullamcorper metus, vel rhoncus tellus. Nunc enim justo, molestie blandit ornare ac, volutpat quis velit.',
      },
      {
        id: 3,
        value: 'Nunc accumsan urna quis erat condimentum sodales.',
      },
      {
        id: 4,
        value: 'Integer aliquam posuere diam sed congue. In auctor, nisl sed bibendum bibendum, justo mauris scelerisque sem, at laoreet quam ligula id libero.',
      }],
    },
  ],
  EDUCATION_DETAILS: [
    {
      course: 'Bachelor of Business',
      courseDuration: 'January 2012 - January 2015',
      school: 'School of Business Studies',
    },
  ],
};

// Get icons from https://fontawesome.com/icons

export default DATA;
