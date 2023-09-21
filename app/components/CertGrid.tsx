"use client";
import Card from "./Card";

const CertGrid = () => {
  return (
    <>
      <div className="my-8 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-10">
          <Card>
            <p className="text-xl md:text-2xl text-ctp-sky">
              Technical Certificate
            </p>
            <p className="text-lg md:text-xl text-ctp-text mt-2">
              Computer Programming Specialist: Programming
            </p>
            <p className="text-lg md:text-xl mt-8">
              <span className="text-ctp-red">Valencia College</span> (Aug 1,
              2023)
            </p>
          </Card>

          <Card>
            <p className="text-xl md:text-2xl text-ctp-sky">
              Technical Certificate
            </p>
            <p className="text-lg md:text-xl text-ctp-text mt-2">
              Computer Programming Specialist: Web Development
            </p>
            <p className="text-lg md:text-xl mt-8">
              <span className="text-ctp-red">Valencia College</span> (Aug 1,
              2023)
            </p>
          </Card>

          <div className="col-span-full ">
            <Card>
              <p className="text-xl md:text-2xl text-ctp-sky">
                Technical Certificate
              </p>
              <p className="text-lg md:text-xl text-ctp-text mt-2">
                Operations Support and Services
              </p>
              <p className="text-lg md:text-xl mt-8">
                <span className="text-ctp-red">Valencia College</span> (Aug 2,
                2022)
              </p>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default CertGrid;
