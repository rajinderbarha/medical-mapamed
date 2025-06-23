"use client";
import { sendGAEvent } from "@/lib/analytics";

type Props = {
    eventName: string;
    eventParams?: Record<string, any>;
    children: React.ReactNode;
};

const withAnalytics = ({ eventName, eventParams = {}, children }: Props) => {
    const handleClick = () => {
        sendGAEvent(eventName, eventParams);
    };

    return (
        <div onClick={handleClick}>
            {children}
        </div>
    );
};

export default withAnalytics;


//  usage example import withAnalytics from "@/hoc/withAnalytics";

{/* <withAnalytics eventName="pin_clicked" eventParams={{ id: 123, type: "cabinet" }}>
  <button>Click Me</button>
</withAnalytics> */}
