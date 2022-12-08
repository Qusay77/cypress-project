const sort = (source: Array<any>, sourceId: string, targetId: string) => {
	const oldSourceIndex = source.findIndex((item) => item.id === sourceId);
	const oldTargetIndex = source.findIndex((item) => item.id === targetId);
	const nextData = source.filter((item) => item.id !== sourceId);
	const dragItem = source.find((item) => item.id === sourceId);
	let index = nextData.findIndex((item) => item.id === targetId);

	if (oldTargetIndex > oldSourceIndex) {
		index = index + oldTargetIndex - oldSourceIndex;
	}
	nextData.splice(index, 0, dragItem);
	return nextData;
};

export default sort;
