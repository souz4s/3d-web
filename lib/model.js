import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export function loadGLTFModel(
    scene,
    glbPath
) {
    return new Promise((resolve, reject) => {
        const loader = new GLTFLoader();

        loader.load(
            glbPath,
            gltf => {
                const obj = gltf.scene;
                obj.position.y = 0;
                obj.position.x = 0;
                scene.add(obj);

                resolve(obj);
            },
            undefined,
            function (error) {
                reject(error)
            }
        );
    });
};