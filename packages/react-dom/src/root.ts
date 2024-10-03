import {
	createContainer,
	updateContainer
} from 'react-reconciler/src/fiberReconciler';
import { Container } from './hostConfig';
import { ReactElementType } from 'shared/ReactTypes';

// ReactDOM.createRoot(root).render(<App />)
export function createRoot(contanier: Container) {
	const root = createContainer(contanier);

	console.log('createRoot 开始');
	return {
		render(element: ReactElementType) {
			updateContainer(element, root);
		}
	};
}
