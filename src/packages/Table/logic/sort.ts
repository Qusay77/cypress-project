import { arrayMoveImmutable } from "array-move";
const sort = (
	source: Array<any>,
	sourceId: string | number,
	targetId: string,
) => {
	const oldSourceIndex = source.findIndex((item) => item.id == sourceId);
	const oldTargetIndex = source.findIndex((item) => item.id == targetId);
	const res = arrayMoveImmutable(source, oldSourceIndex, oldTargetIndex);
	return res;
};

export { sort };
