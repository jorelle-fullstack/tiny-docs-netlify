import React from "react";
import clsx from "clsx";
import Image from "next/image";
import { Button } from "../../components/global";
import Check from "../../assets/images/check.svg";
import Close from "../../assets/images/close.svg";

const Plans = () => {
  const plans = [
    {
      category: "Free",
      title: "Free",
      description: "This plan is best for..",
      inclusions: [
        {
          included: false,
          item: "You don’t get this",
        },
        {
          included: false,
          item: "You don’t get this",
        },
        {
          included: false,
          item: "You don’t get this",
        },
        {
          included: false,
          item: "You don’t get this",
        },
        {
          item: "You get this",
        },
        {
          item: "You get this",
        },
      ],
      price: "0",
    },
    {
      category: "Individuals",
      title: "Individuals",
      description: "This plan is best for teachers and parents?",
      inclusions: [
        {
          included: false,
          item: "You don’t get this",
        },
        {
          included: false,
          item: "You don’t get this",
        },
        {
          included: false,
          item: "You don’t get this",
        },
        {
          included: false,
          item: "You don’t get this",
        },
        {
          item: "You get this",
        },
        {
          item: "You get this",
        },
      ],
      price: "?",
    },
    {
      category: "Providers",
      title: "Providers",
      description: "This plan is best for doctors?",
      inclusions: [
        {
          included: false,
          item: "You don’t get this",
        },
        {
          included: false,
          item: "You don’t get this",
        },
        {
          included: false,
          item: "You don’t get this",
        },
        {
          included: false,
          item: "You don’t get this",
        },
        {
          item: "You get this",
        },
        {
          item: "You get this",
        },
      ],
      price: "?",
    },
  ];

  return (
    <div className="section-plans">
      <div className="plan__wrapper">
        <h1>Pricing Plans</h1>
        <div className="plan__content">
          {plans.map((plan, i) => {
            return (
              <div
                key={i}
                className={clsx("plan__holder", {
                  free: plan.category === "Free",
                  individuals: plan.category === "Individuals",
                  providers: plan.category === "Providers",
                })}
              >
                <div className="plan__title-holder">
                  <h2>{plan.title}</h2>
                </div>
                <div className="plan__content-holder">
                  <p>{plan.description}</p>
                  <ul>
                    {plan.inclusions.map((inclusion, j) => {
                      return (
                        <li
                          key={j}
                          className={clsx("item", {
                            "not-included": inclusion.included === false,
                          })}
                        >
                          <span>
                            {inclusion.included === false ? (
                              <Image src={Close} className="" alt="Close" />
                            ) : (
                              <Image src={Check} className="" alt="Check" />
                            )}
                          </span>
                          {inclusion.item}
                        </li>
                      );
                    })}
                  </ul>
                  <p className="plan__price">
                    $<span>{plan.price}</span>/month
                  </p>
                  <Button
                    className={clsx({
                      "btn--yellow": plan.category === "Free",
                      "btn--red": plan.category === "Individuals",
                      "btn--blue": plan.category === "Providers",
                    })}
                  >
                    Buy Now
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Plans;
