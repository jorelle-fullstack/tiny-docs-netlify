import React from "react";
import clsx from "clsx";
import Image from "next/image";
import { useRouter } from 'next/router'
import { Button } from "../../components/global";
import Check from "../../assets/images/check.svg";
import Close from "../../assets/images/close.svg";

const Plans = () => {
  const router = useRouter()

  // Handles onClick event of pricing plan buttons.
  function handlePlanOnClick (plan) {
    const category = plan.category
    if (category === 'Freemium') {
      router.push('/')
    } else {
      router.push('/checkout')
    }
  }
  
  const plans = [
    {
      category: "Freemium",
      title: "Freemium",
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
      category: "Family",
      title: "Family",
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
      category: "Pediatric",
      title: "Pediatric",
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
      <div className="container">
        <div className="plan__wrapper">
          <h1>Pricing Plans</h1>
          <div className="plan__content">
            {plans.map((plan, i) => {
              return (
                <div
                  key={i}
                  className={clsx("plan__holder", {
                    free: plan.category === "Freemium",
                    individuals: plan.category === "Family",
                    providers: plan.category === "Pediatric",
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
                    {/* Button text changed to "Avail Now" for the FREE button since it made no sense to buy a free subscription. -Frolyn R */}
                    <Button
                      className={clsx({
                        "btn--yellow": plan.category === "Freemium",
                        "btn--red": plan.category === "Family",
                        "btn--blue": plan.category === "Pediatric",
                      })}
                      onClick={(e) => handlePlanOnClick(plan)}
                    >
                    {plan.category !== 'Freemium' ? 'Buy Now' : 'Avail Now'}
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
