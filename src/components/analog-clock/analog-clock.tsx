import React from "react";
type State = {
  secOffset: number;
  minuteOffset: number;
  hourOffset: number;
  secDeg: number;
  minuteDeg: number;
  hourDeg: number;

}
type Props = Record<string, never>;
export class AnalogClock extends React.Component<Props, State> {
  constructor(props: Props | Readonly<Props>) {
    super(props);
    this.state = {
      secOffset: 0,
      minuteOffset: 0,
      hourOffset: 0,
      secDeg: 0,
      minuteDeg: 0,
      hourDeg: 0
    }
  }


  flexCenter = " flex items-center justify-center ";
  circleClassTw = this.flexCenter + " absolute ";
  circleTagTw = "w-full h-full fill-transparent stroke-5 translate-x-[5px] translate-y-[5px] opacity-25 ";
  dots = " absolute w-full h-full flex justify-center before:absolute  before:h-3 before:w-3 before:-top-1 before:rounded-full  before:shadow-2xl before:-top-[1px]"
  niddels = "absolute flex justify-center";

  interval: number | null = null;

  componentDidMount(): void {
    this.calcOffsetAndUpdateState();
    this.interval = setInterval(() => this.calcOffsetAndUpdateState())
  }

  calcOffsetAndUpdateState = () => {
    const { h, s, m } = this.getTime();
    this.setState({ secOffset: this.calcOffset(760, 60, s) });
    this.setState({ minuteOffset: this.calcOffset(630, 60, m) });
    this.setState({ hourOffset: this.calcOffset(510, 12, h) });
    this.setState({ secDeg: s * 6 });
    this.setState({ minuteDeg: m * 6 });
    this.setState({ hourDeg: h * 30 });
  }

  calcOffset(dasharray: number, particles: number, seconds: number): number {
    return dasharray - (dasharray * seconds) / particles;
  }

  getTime() {
    const date = new Date();
    return {
      h: date.getHours(),
      m: date.getMinutes(),
      s: date.getSeconds() + date.getMilliseconds() / 1000
    }
  }


  componentWillUnmount(): void {
    this.interval != null && clearInterval(this.interval)
  }

  render(): React.ReactNode {
    return <section className={this.flexCenter + "h-screen overflow-hidden bg-[#2f363e]"}>
      <div className={this.flexCenter + "clock relative h-[280px] w-[280px] shadow-[inset_5px_5px_25px_rgba(0,0,0,25)] scale-1501 rounded-full"}>
        <div id="time" className={this.flexCenter + "relative w-[250px] h-[250px]"}>
          <div className={this.circleClassTw}>
            <div style={{ transform: `rotateZ(${this.state.secDeg}deg)` }} className={this.dots + " before:bg-rose-400"}></div>
            <svg className="relative w-[250px] h-[250px] -rotate-90">
              <circle style={{ strokeDasharray: 760, strokeDashoffset: this.state.secOffset }} className={this.circleTagTw + "stroke-rose-400"} cx="120" cy="120" r="120" id="ss"></circle>
            </svg>
          </div>
          <div className={this.circleClassTw}>
            <div style={{ transform: `rotateZ(${this.state.minuteDeg}deg)` }} className={this.dots + "  min_dot before:bg-yellow-400"}></div>
            <svg className="relative w-[210px] h-[210px] -rotate-90">
              <circle style={{ strokeDasharray: 630, strokeDashoffset: this.state.minuteOffset }} className={this.circleTagTw + "stroke-yellow-400"} cx="100" cy="100" r="100" id="mm"></circle>
            </svg>
          </div>
          <div className={this.circleClassTw}>
            <div style={{ transform: `rotateZ(${this.state.hourDeg}deg)` }} className={this.dots + " hr_dot before:bg-green-400"}></div>
            <svg className="relative w-[170px] h-[170px] -rotate-90">
              <circle style={{ strokeDasharray: 510, strokeDashoffset: this.state.hourOffset }} className={this.circleTagTw + "stroke-green-400 stroke-5"} cx="80" cy="80" r="80" id="hh"></circle>
            </svg>
          </div>

          <div style={{ transform: `rotateZ(${this.state.secDeg}deg)` }} className={this.niddels + " w-52 h-52 z-40 "}>
            <i className="w-[1px] bg-rose-400 rounded-full scale-50 origin-bottom h-1/2 absolute" ></i>
          </div>
          <div style={{ transform: `rotateZ(${this.state.minuteDeg}deg)` }} className={this.niddels + " w-48 h-48 z-30"}>
            <i className="w-1 bg-yellow-400 rounded-full scale-50 origin-bottom h-1/2 absolute" ></i>
          </div>
          <div style={{ transform: `rotateZ(${this.state.hourDeg}deg)` }} className={this.niddels + " w-36 h-36 z-20"}>
            <i className="w-2 bg-green-400 rounded-full scale-50 origin-bottom h-1/2 absolute" ></i>
          </div>

          <div className="numbers absolute h-full w-full flex justify-center items-center">
            {
              ["II", ".", ".", "I", ".", ".", "I", ".", ".", "I", ".", "."].map((num, index) => (
                <span style={{ transform: `rotate(${index * 30}deg)` }} className="text-slate-400 absolute h-36">
                  <b style={{ transform: `rotate(${index * 60}deg)` }}>{num}</b>
                </span>
              ))
            }
          </div>

        </div>
      </div>
    </section>
  }
}