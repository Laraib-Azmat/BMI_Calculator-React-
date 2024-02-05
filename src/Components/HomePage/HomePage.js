import React from "react";
import HomeContent from "./HomeContent";

import styles from "./HomePage.module.css";
import { useEffect, useRef } from "react";
import $ from "jquery";

export default function HomePage() {
  const canvasRef = useRef(null);
  const cloneCanvasRef = useRef(null);

  let ww = $(window).width();
  let wh = $(window).height();
  let partCount = 100;
  let particles = [];

  useEffect(() => {
    const canvas = canvasRef.current;
    const clone = cloneCanvasRef.current;
    const cloneCtx = clone.getContext("2d");
    const ctx = canvas.getContext("2d");

    canvas.width = ww;
    canvas.height = wh;

    function particle() {
      this.color = "rgba(255,255,255," + Math.random() + ")";
      this.x = randomInt(0, ww);
      this.y = randomInt(0, wh);
      this.direction = {
        x: -1 + Math.random() * 2,
        y: -1 + Math.random() * 2,
      };
      this.vx = 0.3 * Math.random();
      this.vy = 0.3 * Math.random();
      this.radius = randomInt(2, 3);
      this.float = function () {
        this.x += this.vx * this.direction.x;
        this.y += this.vy * this.direction.y;
      };
      this.changeDirection = function (axis) {
        this.direction[axis] *= -1;
      };
      this.boundaryCheck = function () {
        if (this.x >= ww) {
          this.x = ww;
          this.changeDirection("x");
        } else if (this.x <= 0) {
          this.x = 0;
          this.changeDirection("x");
        }
        if (this.y >= wh) {
          this.y = wh;
          this.changeDirection("y");
        } else if (this.y <= 0) {
          this.y = 0;
          this.changeDirection("y");
        }
      };
      this.draw = function () {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fill();
      };
    }

    function clearCanvas() {
      cloneCtx.clearRect(0, 0, ww, wh);
      ctx.clearRect(0, 0, ww, wh);
    }

    function createParticles() {
      for (let i = 0; i < partCount; i++) {
        const p = new particle();
        particles.push(p);
      }
    }

    function drawParticles() {
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.draw();
      }
    }

    function updateParticles() {
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.float();
        p.boundaryCheck();
      }
    }

    createParticles();
    drawParticles();

    function animateParticles() {
      clearCanvas();
      drawParticles();
      updateParticles();
      cloneCtx.drawImage(canvas, 0, 0);
      requestAnimationFrame(animateParticles);
    }

    requestAnimationFrame(animateParticles);
    cloneCtx.drawImage(canvas, 0, 0);

    const handleResize = () => {
      ww = $(window).width();
      wh = $(window).height();
      canvas.width = ww;
      canvas.height = wh;
      clearCanvas();
      particles = [];
      createParticles();
      drawParticles();
    };

    $(window).on("resize", handleResize);
  }, []);

  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return (
    <div className={styles.body}>
      <canvas className={styles.container} ref={canvasRef} role="main"></canvas>

      <HomeContent />

      <div className={`${styles.blur} ${styles.blurTop}`}>
        <canvas className={`${styles.canvas} ${styles.blurCanvasTop}`}></canvas>
      </div>
      <div className={`${styles.blur} ${styles.blurBottom}`}>
        <canvas
          style={{ width: "1000px", height: "1000px" }}
          ref={cloneCanvasRef}
          className={`${styles.canvas} ${styles.blurCanvasBottom}`}
        ></canvas>
      </div>
    </div>
  );
}
