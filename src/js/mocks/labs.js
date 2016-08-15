import fetchMock from 'fetch-mock';

fetchMock
  .mock(/\.json/, {
		'test': [
			{
				a: 111,
				b: 222
			},
			{
				a: 333,
				b: 444
			}
		]
  });