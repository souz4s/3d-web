import { useCallback, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { loadGLTFModel } from "../lib/model";
import { BodyModel } from "../styles/model";

const NiclaVision: React.FC = () => {
  const refBody = useRef<HTMLDivElement>(null);
  const [renderer, setRenderer] = useState<any>();
  const [_camera, setCamera] = useState<any>();
  const [target] = useState(new THREE.Vector3(-0.22, 0, 0.2));
  const [initialCameraPosition] = useState(
    new THREE.Vector3(0 * Math.sin(0.2 * Math.PI), 150, 1 * Math.cos(0.2 * Math.PI)),
  );
  const [scene] = useState(new THREE.Scene());
  const [_controls] = useState<any>();

  const handleWindowResize = useCallback(() => {
    const { current: container } = refBody;
    if (container && renderer) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;

      renderer.setSize(scW, scH);
    }
  }, [renderer]);

  useEffect(() => {
    const { current: container } = refBody;
    if (container && !renderer) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;

      const renderer = new THREE.WebGLRenderer();
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(scW, scH);
      renderer.outputEncoding = THREE.sRGBEncoding;
      container.appendChild(renderer.domElement);
      setRenderer(renderer);

      const camera = new THREE.PerspectiveCamera(0.6, 2);
      camera.position.copy(initialCameraPosition);
      camera.lookAt(target);
      setCamera(camera);

      renderer.render(scene, camera);

      loadGLTFModel(scene, "/gltf/nicla_vision.gltf")
        .then(() => {
          animate();
        });

      const animate = () => {
        camera.position.y = 131;
        camera.position.x = 0;
        camera.position.z = 31;
        camera.lookAt(target);

        renderer.render(scene, camera);
      };

      const mouseMoveEvent = e => {
        const mouseToleranceX = 0.005;
        const mouseToleranceY = 0.03;

        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        camera.position.y = 131 + (e.clientY - centerY) * mouseToleranceY;
        camera.position.x = (e.clientX - centerX) * mouseToleranceX;
        camera.position.z = 31;
        camera.lookAt(target);

        renderer.render(scene, camera);
      };

      document.addEventListener("mousemove", mouseMoveEvent, false);

      return () => {
        console.log('unmount');
        renderer.dispose();
      };
    }
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize, false);
    return () => {
      window.removeEventListener('resize', handleWindowResize, false);
    };
  }, [renderer, handleWindowResize]);

  return (
    <BodyModel ref={refBody} />
  );
};

export default NiclaVision;
