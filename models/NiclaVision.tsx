import React, { useCallback, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { loadGLTFModel } from "../lib/model";
import { BodyModel } from "./style";

const NiclaVision: React.FC = () => {
  const refBody = useRef<HTMLDivElement>(null);
  const [renderer, setRenderer] = useState<any>();
  const [_camera, setCamera] = useState<any>();
  const [target] = useState(new THREE.Vector3(-0.2, 1, 0.4));
  const [initialCameraPosition] = useState(
    new THREE.Vector3(20 * Math.sin(0.2 * Math.PI), 10, 20 * Math.cos(0.2 * Math.PI)),
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

      loadGLTFModel(scene, "/gltf/nicla_vision.gltf")
        .then(() => {
          animate();
        });

      const animate = () => {
        camera.position.y = 130;
        camera.position.x = 0;
        camera.position.z = 31;
        camera.lookAt(target);

        renderer.render(scene, camera);
      };

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