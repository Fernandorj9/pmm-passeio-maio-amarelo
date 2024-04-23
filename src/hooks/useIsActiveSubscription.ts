import { isAfter } from "date-fns";
import { useEffect, useState } from "react";
import { getCyclistSubscriptionsCount } from "../services/cyclist";

export function useIsActiveSubscription() {
  const [isActiveSubscription, setIsActiveSubscription] = useState(false);

  async function verifyIsActive() {
    // today is bigger than 04/18/2022
    let count = 0

    count = await getCyclistSubscriptionsCount()

    if (count > 600 && isAfter(new Date(), new Date("2022-04-18"))) {
      setIsActiveSubscription(false)
    } else {
      setIsActiveSubscription(true)
    }

  }

  useEffect(() => {
    verifyIsActive()
  }, [])

  return {
    isActiveSubscription
  }
}