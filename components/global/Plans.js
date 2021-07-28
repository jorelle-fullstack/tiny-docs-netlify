// Dependencies
import React from "react";
import clsx from "clsx";
import { useRouter } from 'next/router'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

// Components
import Image from "next/image";
import { Button } from "../../components/global"

// Assets
import Check from "../../assets/images/check.svg"
import Close from "../../assets/images/close.svg"

const Plans = () => {
  const router = useRouter()
  // Handles onClick event of pricing plan buttons.
  function handlePlanOnClick (plan) {
    document.cookie = `plan=${plan.category}`
    router.push('/register')
  }
  
  const plans = [
    {
      category: "Freemium",
      title: "Freemium",
      description: "This plan is best for..",
      link: '/my-account',
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
      link: '/checkout?planType=individuals',
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
      link: '/checkout?planType=providers',
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
      <div className="container">
        <div className="plan__wrapper">
          <CSSTransition in={true} appear={true} classNames='pop' timeout={0}>
          <h1>Pricing Plans</h1>
          </CSSTransition>
          <div className="plan__content">
          <TransitionGroup component={null}>
          {plans.map((plan, i) => {
              let timeout = parseInt(`${i*2}00`)
              timeout = timeout + 500
              return (
                <CSSTransition key={i} in={true} appear={true} classNames='pop' timeout={timeout}>
                <div
                  key={i}
                  className={clsx("plan__holder", {
                    free: plan.category === "Freemium",
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
                    <Button onClick={(e) => handlePlanOnClick(plan)}
                          className={clsx({
                            "btn--yellow": plan.category === "Freemium",
                            "btn--red": plan.category === "Individuals",
                            "btn--blue": plan.category === "Providers",
                          })}
                        >
                          {plan.category !== 'Freemium' ? 'Buy Now' : 'Avail Now'}
                        </Button>
                  </div>
                </div>
                </CSSTransition>
              )
            })}
          </TransitionGroup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
