export function treeMapOptions(){

    const options = {
		legend: {
			show: false
		},
		chart: {
			height: 350,
			type: 'treemap',
			toolbar: {
				show: false,
			},
		},
		title: {
			text: '',
			align: 'center'
		},
		colors: [
			'#3B93A5',
			'#F7B844',
			'#ADD8C7',
			'#EC3C65',
			'#CDD7B6',
			'#C1F666',
			'#D43F97',
			'#1E5D8C',
			'#421243',
			'#7F94B0',
			'#EF6537',
			'#C0ADDB'
		],
		plotOptions: {
			treemap: {
				distributed: true,
				enableShades: false
			}
		}
	}
    return options
}