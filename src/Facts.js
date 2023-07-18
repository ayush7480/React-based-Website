import React, { Component } from "react";

class Facts extends Component {
  render() {
    return (
      <div>
        <h2>INTERESTING FACTS ABOUT NEUTRON STAR.</h2>
        <ol>
          <li>
            <strong>Definition</strong>: Neutron stars are incredibly dense celestial objects that
            form when a massive star undergoes a supernova explosion. They are
            composed mostly of neutrons, hence the name.
          </li>
          <li>
            <strong>Compactness:</strong> Neutron stars are one of the most compact objects in the
            universe. They are so dense that a teaspoon of neutron star material
            would weigh billions of tons.
          </li>
          <li>
            <strong>Gravity:</strong> The gravity on the surface of a neutron star is incredibly
            strong. If you were standing on the surface of a neutron star, the force
            of gravity would be about 200 billion times stronger than on Earth.
          </li>
          <li>
            <strong>Rotation:</strong> Neutron stars can rotate extremely rapidly. Some neutron stars
            known as pulsars emit beams of electromagnetic radiation that appear to
            pulse as the star rotates. The fastest known pulsar, named PSR J1748-2446ad,
            spins at a rate of more than 43,000 rotations per minute.
          </li>
        </ol>
      </div>
    );
  }
}

export default Facts;
